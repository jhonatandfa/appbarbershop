import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  MarkerCluster,
  Geocoder,
  GeocoderResult,
  GeocoderRequest,
  MyLocation
} from '@ionic-native/google-maps';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { Barbearia } from '../entities/barbearia';
import { BarbeariaService } from '../services/barbearia.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Servico } from '../entities/servico';
import { ServicoService } from '../services/servico.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-register-barber',
  templateUrl: './register-barber.page.html',
  styleUrls: ['./register-barber.page.scss'],
})

export class RegisterBarberPage implements OnInit {
  map: GoogleMap;
  posLat: number = -22.9035;
  posLon: number = -43.2096;
  zoom: number = 15;
  barbearia: Barbearia;
  public servicos:any;
  servicosSelecionadas:any;

  public horas = [
    '00:00', '00:30','01:00', '11:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00',
    '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', 
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '16:00', '16:30', '17:00',
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00',
    '23:30'
  ];

  user: any = "teste";
  constructor(private platform: Platform,
    private ToastCtrl: ToastController,
    private barberService: BarbeariaService,
    private AuthService: AngularFireAuth,
    public servicoService:ServicoService, 
    private route: Router,private AlertCtrl: AlertController) {
  }
  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    this.barbearia = new Barbearia();
    
    this.servicos =  this.servicoService.getAll();
    await this.platform.ready();
    await this.loadMap();
     
   
  }

  getHoraA(e){
    this.barbearia.horarioAbert = e.detail.value;
    console.log(this.barbearia.horarioAbert);
  }

  getHoraF(e){
    this.barbearia.horarioFecha = e.detail.value;
    
  }

  getServices(){

    this.servicosSelecionadas.forEach(e => {
      let servico = e.split("+");
      this.barbearia.servico.push({
        key: servico[0],
         nome:servico[1],
        preco: 0.0})
    });
  }

  register(){
    this.barbearia.status = false
    this.getServices()
    this.AuthService.user.subscribe(
      res=> 
      this.barberService.save(this.barbearia, res.uid).then( () => {
        this.presentAlert();
        this.route.navigate(['/add-service', { key: res.uid }])        

      })
    )
    
  }

  async presentAlert() {
    const alert = await this.AlertCtrl.create({
      header: 'Barbearia cadastrada com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }

   
  async presentToast(message: string) {
    const toast = await this.ToastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }


  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      'camera': {
        'target': {
          'lat': this.posLat,
          'lng': this.posLon,
        },
        'zoom': this.zoom
      }
    });
    this.addCluster(this.dummyData());
  }


  addCluster(data) {
    let markerCluster: MarkerCluster = this.map.addMarkerClusterSync({
      markers: data,
      icons: [
        {
          min: 3,
          max: 9,
          url: "./assets/markercluster/small.png",
          label: {
            color: "white"
          }
        },
        {
          min: 10,
          url: "./assets/markercluster/large.png",
          label: {
            color: "white"
          }
        }
      ]
    });

    markerCluster.on(GoogleMapsEvent.MARKER_CLICK)
      .subscribe((params) => {
        let marker: Marker = params[1];
        marker.setTitle(marker.get("name"));
        marker.setSnippet(marker.get("address"));
        marker.showInfoWindow();
      });

  }

  //Local Atual -------------
  localAtual() {
    this.map.clear()
    this.map.getMyLocation()
      .then(
        (location: MyLocation) => {
          //console.log(JSON.stringify(location, null, 2));
          this.zoom = 18;
          this.map.animateCamera({
            target: location.latLng,
            zoom: this.zoom,
            tilt: 30
          });
          this.map.addMarker({
            title: 'Ionic',
            snippet: 'A programação hibrida',
            icon: '#ff0000',
            animation: 'DROP',
            zoom: 15,
            position: {
              lat: location.latLng.lat,
              lng: location.latLng.lng
            }
          })
        })
  }

  //Busca endereco -----------------------------
  public endereco: string = 'Kyoto, Japan';

  async localEndereco(event) {
    let options: GeocoderRequest = {
      address: this.endereco
    };
  
    // Address -> latitude,longitude
    Geocoder.geocode(options).then((results: GeocoderResult[]) => {
      console.log(results);

      if (results.length > 0) {
        let marker: Marker = this.map.addMarkerSync({
          position: results[0].position,
          title: JSON.stringify(results[0].position),
          icon: '#00ee00'
        });
        this.map.animateCamera({
          target: marker.getPosition(),
          zoom: 15
        });
        marker.showInfoWindow();
      } else {
    
      }
    })
  }

  //Pega localização ---------------------
  pegaLocal() {
    this.map.clear();
    this.map.on(GoogleMapsEvent.MAP_CLICK)
      .subscribe(
        res => {
          this.map.addMarker({
            title: 'Lugar',
            snippet: 'Descricao do lugar: \n lat: ' + res[0].lat + "\n lng: " + res[0].lng,
            icon: 'assets/markercluster/marker.png',
            //animation: 'drop',
            zoom: this.zoom,
            position: {
              lat: res[0].lat,
              lng: res[0].lng
            }
          })
          this.barbearia.lat = res[0].lat;
          this.barbearia.lng = res[0].lng;
          
        }

      )
  }



  //lista de lojas --------------------------
  dummyData() {
    return [
      {
        "position": {
          "lat": -22.9035,
          "lng": -43.2096
        },
        "name": "Barbearia São José",
        "address": "Aiea Shopping Center_99-115\nAiea Heights Drive #125_Aiea, Hawaii 96701",
        "icon": "assets/markercluster/marker.png"
      }
    ];
  }

}



