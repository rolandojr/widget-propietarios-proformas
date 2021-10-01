Vue.component('vue-multiselect', window.VueMultiselect.default)
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      entity : {
        id : null,
        module: null,
      },
      tapiz_asiento: false,
      espejo:false,
      cubre_cadena: false,
      tapas_laterales:false,
      llanta_posterior:false,
      guardafango_delantero:false,
      guardafango_posterior:false,
      faro_delantero:false,
      llanta_delantera:false,
      meta:{
        organization : {
            id:null,
        },
        currentUser: {
            id: null,
            firstName: null,
            lastName: null,
            fullName:null,
            email: null,
            role: null,
            profile: null,
        }
      },
      value: [],
      options: [
        { name: 'Llave de Contacto', value: 'Llave de Contacto' },
        { name: 'Tarjeta de Propiedad', value: 'Tarjeta de Propiedad' },
        { name: 'Libro de Servicio', value: 'Libro de Servicio' },
        { name: 'Espejo LH-RH', value: 'Espejo LH-RH' },
        { name: 'Tapiz de Asiento', value: 'Tapiz de Asiento' },
        { name: 'Porta Herramientas', value: 'Porta Herramientas' },
        { name: 'Telescópicas', value: 'Telescópicas' },
        { name: 'Cobertores', value: 'Cobertores' },
        { name: 'Tapas Laterales LH-RH', value: 'Tapas Laterales LH-RH' },
        { name: 'Parrilla', value: 'Parrilla' },
        { name: 'Velocímetro', value: 'Velocímetro' },
        { name: 'Tacómetro', value: 'Tacómetro' },
        { name: 'Maleta Delívey', value: 'Maleta Delívey' },
        { name: 'Seguro - Cadena', value: 'Seguro - Cadena' },
        { name: 'Cable Freno Delantero', value: 'Cable Freno Delantero' },
        { name: 'Cable Embrague', value: 'Cable Embrague' },
        { name: 'Cable Velocímetro', value: 'Cable Velocímetro' },
        { name: 'Cable Tacómetro', value: 'Cable Tacómetro' },
        { name: 'Parador central', value: 'Parador central' },
        { name: 'Amortiguadores Post. 1-2', value: 'Amortiguadores Post. 1-2' },
        { name: 'Guardafango Delantero', value: 'Guardafango Delantero' },
        { name: 'Guardafango Posterior', value: 'Guardafango Posterior' },
        { name: 'Cubre Cadena', value: 'Cubre Cadena' },
        { name: 'Llanta Del. Buena-Gastada', value: 'Llanta Del. Buena-Gastada' },         
        { name: 'Llanta Post.  Buena-Gastada', value: 'Llanta Post.  Buena-Gastada' },
        { name: 'Pedal de Arranque', value: 'Pedal de Arranque' },
        { name: 'Palanca de Cambio', value: 'Palanca de Cambio' },
        { name: 'Tapa de Alternador si-no', value: 'Tapa de Alternador si-no' },
        { name: 'Jebes de Estribo LH-RH', value: 'Jebes de Estribo LH-RH' },
        { name: 'Faro Delantero', value: 'Faro Delantero' },
        { name: 'Descansa pie Pasajero LH-RH', value: 'Descansa pie Pasajero LH-RH' },
        { name: 'Tapa de Gasolina', value: 'Tapa de Gasolina' },
        { name: 'Herramientas', value: 'Herramientas' },
        { name: 'Varilla de Aceite', value: 'Varilla de Aceite' },
        { name: 'Tapa Deposito Freno', value: 'Tapa Deposito Freno' },
        { name: 'Escarpines', value: 'Escarpines' },
        { name: 'Emblemas', value: 'Emblemas' },
        { name: 'Faro Direcc. Lat.', value: 'Faro Direcc. Lat.' },
        { name: 'Faro Posterior', value: 'Faro Posterior' },
        { name: 'Pedal de  Freno', value: 'Pedal de  Freno' },
        { name: 'Otros', value: 'Otros' },
      ],
      orden_servicio:{
          fecha_emision:null,
          fecha_entrega:null,
          hora_entrega:null,
          ofrecida:null,
          condiciones_pago:null,
          datos_cliente:{
            razon_social:null,
            ruc:null,
            direccion:null,
            distrito:null,
            usuario:null,
            dni:null,
            correo:null,
            telefono:null,
            celular:null,
          },
          tipo_servicio:null,
          datos_vehiculo:{
              modelo:null,
              n_motor:null,
              n_chasis:null,
              anio_fabricacion:null,
              color:null,
              placa:null,
              kilometraje:null,
          },
          trabajos_especificos_list:[],
          trabajos_especificos:{
              mantenimiento:null,
              cambio_aceite:null,
              preparacion_motor:null,
              descarbonizado:null,
              embrague:null,
              transmision:null,
              sistema_arrastre:null,
              frenos:null,
              bateria:null,
              rev_sis_electrico:null,
              rev_sis_encendido:null,
              suspencion:null,
              aro_neumatico:null,
              sis_escape:null,
              sis_direccion:null,
              otros:null,
              mo_revision:null,
              mo_mecanica:null,
              servicios_terceros:null,
              otros_servicios:null,
              subtotal_mo:null,
              repuestos:null,
              accesorios:null,
              lubricantes:null,
              otros_subtotal:null,
              subtotal_repuestos:null,
              total_final:null,
          },

      }
    },
    methods : {
        
        initZSDK: function() {
            const self = this;
            ZOHO.embeddedApp.init()
                .then(function () {
                    ZOHO.CRM.UI.Resize({
                        height: "500",
                        width: "800"
                    })
                });
        },
        closeReloadWidget: function(){
            ZOHO.CRM.UI.Popup.closeReload()
            .then(function(data){
                console.log(data);
            })
        },
        onLoad: function() {
            const self = this;
            ZOHO.embeddedApp.on("PageLoad", async function(data) {
                console.log(data);
                self.entity.id = data.EntityId;
                self.entity.module = data.Entity;
                console.log(self.entity.id);
                
                let data_postventa = await self.getPostVentaData(self.entity.id);
                let contacto =  data_postventa.data[0].Contacto;
                if (contacto != null) {
                    let idContacto = contacto.id;
                    let data_contacto =  await self.getContactData(idContacto);
                    self.mappedDataContacto(data_contacto);

                }
                /**
                 * Widget required requests
                 */
                // await self.getRecord();
                await self.getOrganizationInformation();
                await self.getCurrentUser();

                /**
                 * Custom requests
                 */
                // await self.loaded()
                
            });
        },
        getOrganizationInformation: async function(){
            try {
                let response = await ZOHO.CRM.CONFIG.getOrgInfo();
                console.log(response);
                this.meta.organization.id = response.org[0].zgid
            } catch (error) {
                console.error(error)
            }
        },
        getCurrentUser: async function() {
            try {
                let response = await ZOHO.CRM.CONFIG.getCurrentUser()
                console.log(response);
                this.meta.currentUser.id = response.users[0].id;
                this.meta.currentUser.firstName = response.users[0].first_name;
                this.meta.currentUser.fullName= response.users[0].full_name;
                this.meta.currentUser.lastName = response.users[0].last_name;
                this.meta.currentUser.email = response.users[0].email;
                this.meta.currentUser.role = response.users[0].role;
                this.meta.currentUser.profile = response.users[0].profile;
            } catch (error) {
                console.error(error)
            }
        },
        getRecordLink: function(module, id) {
            return `https://crm.zoho.com/crm/org${this.meta.organization.id}/tab/${module}/${id}`
        },
        cancelar: function(){
            ZOHO.CRM.UI.Popup.close()
            .then(function(data){
                console.log(data)
            })
        },
        updateBlueprint: async function(){
            let data = await ZOHO.CRM.BLUEPRINT.proceed();
            return data;
        },
        updateRecord: async function(){
            var config={
                Entity: this.entity.module,
                APIData:{
                      "id": this.entity.id,
                    //   **************************
                      "Fecha_de_Emisi_n": this.convertDate(this.orden_servicio.fecha_emision),
                      "Hora_de_Entrega_Ofrecida": this.convertDateTime(this.orden_servicio.hora_entrega),
                      "Condiciones_de_Pago": this.orden_servicio.condiciones_pago,
                    //   ***********************
                    //   "Direcci_n": this.orden_servicio.direccion,
                    //   "Distrito": this.orden_servicio.datos_cliente.distrito,
                    //   "Numero_de_Documento": this.orden_servicio.datos_cliente.dni,
                    //   "Email": this.orden_servicio.datos_cliente.correo,
                    //   "Phone": this.orden_servicio.datos_cliente.telefono,
                    //   "Mobile": this.orden_servicio.datos_cliente.celular,
                      "Tipo_de_servicio1": this.orden_servicio.tipo_servicio,
                    //   ************************
                      "Modelo": this.orden_servicio.datos_vehiculo.modelo,
                      "Numero_de_Motor": this.orden_servicio.datos_vehiculo.n_motor,
                      "N_mero_de_chasis": this.orden_servicio.datos_vehiculo.n_chasis,
                      "A_o_de_Fabricaci_n": this.convertDate(this.orden_servicio.datos_vehiculo.anio_fabricacion),
                      "Color": this.orden_servicio.datos_vehiculo.color,
                      "Placa": this.orden_servicio.datos_vehiculo.placa,
                      "Kilometraje": this.orden_servicio.datos_vehiculo.kilometraje,
                    //   *******************
                      "Trabajo_a_Realizar": this.orden_servicio.trabajos_especificos_list,
                    //   *********************
                      "M_O_Revisi_n": this.orden_servicio.trabajos_especificos.mo_revision,
                      "M_O_Mec_nica": this.orden_servicio.trabajos_especificos.mo_mecanica,
                      "Servicio_a_Terceros": this.orden_servicio.trabajos_especificos.servicios_terceros,
                      "Otros1": this.orden_servicio.trabajos_especificos.otros_servicios,
                    // *****************
                      "Repuestos": this.orden_servicio.trabajos_especificos.repuestos,
                      "Accesorio": this.orden_servicio.trabajos_especificos.accesorios,
                      "Lubricantes1": this.orden_servicio.trabajos_especificos.lubricantes,
                      "Otros": this.orden_servicio.trabajos_especificos.otros_subtotal,
                    //   **************************
                      "Tapiz_de_Asiento": this.tapiz_asiento,
                      "Mantenimiento_Regular": this.espejo,
                      "R_G_N": this.cubre_cadena,
                      "Tapas_laterales_LH_RH": this.tapas_laterales,
                      "Guardafango_delantero": this.guardafango_delantero,
                      "Guardafanfo_posterior": this.guardafango_posterior,
                      "Faro_delantero": this.faro_delantero,
                      "Llanta_delantera": this.llanta_delantera,
                      "Llanta_posterior": this.llanta_posterior,
                      "Selecci_n_m_ltiple_1": this.convertMultiValues(this.value),
                },
                Trigger:["workflow"]
              }
            let data = await  ZOHO.CRM.API.updateRecord(config);
            return data;
        },
        guardarDatos: async function(){
            
            let data =  await this.updateRecord();
            let message_request = data.data[0].code;
            console.log(message_request);
            if (message_request === 'SUCCESS') {
                await this.htmlToCanvas();
                let updatedBlueprint =  await this.updateBlueprint();
                // this.closeReloadWidget();
                console.log(updatedBlueprint);    
             }else{
                $('#exampleModal').modal('show');    
            }
            // $('#exampleModal').modal('show');
        },
        // ************************************
        changeSubTotalMO: function(){
            let mo_revision  = (this.orden_servicio.trabajos_especificos.mo_revision || 0);
            let mo_mecanica = (this.orden_servicio.trabajos_especificos.mo_mecanica || 0);            
            let servicios_terceros = (this.orden_servicio.trabajos_especificos.servicios_terceros || 0);            
            let otros_servicios = (this.orden_servicio.trabajos_especificos.otros_servicios || 0);                
            let subtotal_mo = parseFloat(mo_revision) + parseFloat(mo_mecanica) + parseFloat(servicios_terceros) + parseFloat(otros_servicios) ; 
            this.orden_servicio.trabajos_especificos.subtotal_mo = parseFloat(subtotal_mo).toFixed(2);
            // console.log(subtotal_mo);
            let total_final = parseFloat(this.orden_servicio.trabajos_especificos.subtotal_mo || 0) +  parseFloat(this.orden_servicio.trabajos_especificos.subtotal_repuestos || 0);
            this.orden_servicio.trabajos_especificos.total_final =  parseFloat(total_final).toFixed(2);
        },
        changeSubTotalRepuestos: function(){
            let repuestos = parseFloat(this.orden_servicio.trabajos_especificos.repuestos || 0);
            let accesorios = parseFloat(this.orden_servicio.trabajos_especificos.accesorios || 0);
            let lubricantes = parseFloat(this.orden_servicio.trabajos_especificos.lubricantes || 0);
            let otros_subtotal = parseFloat(this.orden_servicio.trabajos_especificos.otros_subtotal || 0);
            let subtotal_repuestos = repuestos + accesorios + lubricantes + otros_subtotal;
            this.orden_servicio.trabajos_especificos.subtotal_repuestos = parseFloat(subtotal_repuestos).toFixed(2);
            let total_final = parseFloat(this.orden_servicio.trabajos_especificos.subtotal_mo || 0) +  parseFloat(this.orden_servicio.trabajos_especificos.subtotal_repuestos || 0);
            this.orden_servicio.trabajos_especificos.total_final =  parseFloat(total_final).toFixed(2);

        },
        convertDate: function(dateString){
            if (dateString != null) {
                let fecha_sin_formato =  dateString.split("T")[0];
                return fecha_sin_formato;    
            }else{
                return null;
            }
        },
        convertDateTime: function(dateString){
            if (dateString != null) {
                return dateString.replace(".000",'');    
            }else{
                return null;
            }
        },
        convertMultiValues: function(values) {
            let single_values = [];
            if (values != null) {
                values.forEach(data=>{
                       single_values.push(data.value) ;
                })
                return single_values;
            }else{
                return null;
            }
        },
        addAndRemove: function(event){
            // console.log(event);
            // console.log(event.target.checked);
            // console.log(event.target.dataset.value);
            let value = event.target.dataset.value;
            if (event.target.checked) {
                console.log("add attribute");
                this.orden_servicio.trabajos_especificos_list.push(value);
                console.log(this.orden_servicio.trabajos_especificos_list);
            }else{
                console.log("remove attribute");
                this.orden_servicio.trabajos_especificos_list = this.orden_servicio.trabajos_especificos_list.filter(val => val != value);
                console.log(this.orden_servicio.trabajos_especificos_list);
            }
        },
        getContactData: async function(id) {
            let data =  await ZOHO.CRM.API.getRecord({Entity:"Contacts",RecordID:id})
            console.log(data);
            return data;
        },
        getPostVentaData: async function(id) {
            let data =  await ZOHO.CRM.API.getRecord({Entity:"Post_Venta",RecordID:id})
            console.log(data);
            return data;
        },
        mappedDataContacto: function(data){
            let contacto =  data.data[0];
            this.orden_servicio.datos_cliente.usuario = contacto.Full_Name;
            this.orden_servicio.datos_cliente.direccion =  contacto.Direcci_n;
            this.orden_servicio.datos_cliente.distrito =  contacto.Distrito;
            this.orden_servicio.datos_cliente.dni =   contacto.Numero_de_Documento;
            this.orden_servicio.datos_cliente.correo =  contacto.Email;
            this.orden_servicio.datos_cliente.telefono =  contacto.Phone;
            this.orden_servicio.datos_cliente.celular = contacto.Mobile;
        },
        b64toBlob: function(b64Data, contentType, sliceSize){
            contentType = contentType || '';
            sliceSize = sliceSize || 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);
              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }
              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            return blob;
        },
        htmlToCanvas: async function() {
            var ref = this;
            var image = "";
            var contenido = document.getElementById("marco-captura");
            // document.body;
            let canvas = await html2canvas(contenido);
            image = canvas.toDataURL();
            var ImageURL = image;
            var block = ImageURL.split(";");
            var contentType = block[0].split(":")[1];
            var realData = block[1].split(",")[1];
            var blob = ref.b64toBlob(realData, contentType);
            let attach_file =  await ZOHO.CRM.API.attachFile({ Entity: ref.entity.module, RecordID: ref.entity.id, File: { Name: "post-venta.png", Content: blob } });
            console.log(attach_file);
        }
    },
    created: function(){
        this.onLoad();
        this.initZSDK();
        ZOHO.embeddedApp.init();
    },


    
  })