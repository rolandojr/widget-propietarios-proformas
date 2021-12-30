Vue.component('vue-multiselect', window.VueMultiselect.default)
// Vue.component('v-select', VueSelect.VueSelect);
Vue.use(window.vuelidate.default);
// 
const required = validators.required;
const minLength = validators.minLength;
const email = validators.email;
const requiredIf = validators.requiredIf;
const numeric = validators.numeric;
// 
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        loading_widget: false,
        loading: false,
        entity: {
            id: null,
            module: null,
        },
        meta: {
            organization: {
                id: null,
            },
            currentUser: {
                id: null,
                firstName: null,
                lastName: null,
                fullName: null,
                email: null,
                role: null,
                profile: null,
            }
        },
        show: {
            anterior: false,
            siguiente: true,
            primero: true,
            segundo: false,
        },
        // 
        tipoDeVenta: '',
        optionsTipoVenta: [],
        propietarios: [],
        // 
        tiene_proforma_activa: false,
        proforma: '',
        moneda: '',
        montoBBP: null,
        monto_bono_verde: null,
        // 
        contado: {
            fechaVencimiento: '',
            banco: '',
        },
        hipotecario: {
            fechaVencimiento: '',
            cuotaInicial: '',
            numeroCuotas: null,
            banco: '',
            AFP: '',
            montoAFP: '',
            bonoBP: '',
            montoBBP: null,
            bonoVerde: '',
            montoBonoVerde: null,
            regalo: '',
            porcentaje_regalo: null,
        },
        planAhorro: {
            fechaVencimiento: '',
            banco: '',
            AFP: '',
            montoAFP: '',
            numeroCuenta: '',
            bonoBP: '',
            montoBBP: null,
            bonoVerde: '',
            montoBonoVerde: null,
            cuotasPlanAhorro: '',
        },
        directo: {
            fechaVencimiento: '',
            cuotaInicial: '',
            numeroCuotas: null,
            banco: '',
            letras: '',
            tiposDeCuotas: ''
        },
        options: [],
        tipoComprador: null,
        contactoRecord: null,
        newContact: {
            nombre: null,
            apellido: null,
            tipoDocumento: null,
            numeroDocumento: null,
        },


    },
    validations: {
        tipoDeVenta: {
            required
        },
        proforma: {
            required,
        },
        propietarios: {
            required,
            $each: {
                tipo: {
                    required: requiredIf(prop => {
                        return !prop.disabled;
                    })
                },
                nombre: {
                    required: requiredIf(prop => {
                        return !prop.disabled;
                    })
                },
                tipoDeDocumento: {
                    required: requiredIf(prop => {
                        return !prop.disabled;
                    })
                },
                numeroDocumento: {
                    required: requiredIf(prop => {
                        return !prop.disabled;
                    })
                },
                tipoPoder: {
                    required: requiredIf(prop => {
                        return !prop.disabled;
                    })
                },
                tipoInscrito: {
                    required: requiredIf(prop => {
                        return !prop.disabled;
                    })
                },
                numeroPartida: {
                    required: requiredIf(prop => {
                        return !prop.disabled;
                    })
                },
                oficina: {
                    required: requiredIf(prop => {
                        return !prop.disabled;
                    }),
                },
                fechaDeDcto: {
                    required: requiredIf(prop => {
                        return !prop.disabled;
                    })
                },
                letraAceptante: {
                    required: requiredIf(prop => {
                        return !prop.disabled;
                    })
                },
                letraLateral: {
                    required: requiredIf(prop => {
                        return !prop.disabled;
                    })
                },
                A1Cabeza: {
                    required: requiredIf(prop => {
                        return !prop.disabled;
                    })
                },
                A1Pie: {
                    required: requiredIf(prop => {
                        return !prop.disabled;
                    })
                }

            }
        }

    },
    watch: {
        tipoDeVenta: function (value) {

            this.propietarios = [];
            // 
            let row1 = {
                esConyuge: false,
                tipo: 'TITULAR',
                nombre: {
                    "name": this.contactoRecord.Full_Name,
                    "id": this.contactoRecord.id
                },
                tipoDeDocumento: this.contactoRecord.Tipo_de_Documento,
                numeroDocumento: this.contactoRecord.N_mero_de_Documento,
                tipoPoder: this.contactoRecord.Tipo_de_Poder,
                tipoInscrito: this.contactoRecord.Poder_Inscrito,
                numeroPartida: this.contactoRecord.N_Partida,
                oficina: this.contactoRecord.Oficina,
                fechaDeDcto: this.contactoRecord.Fecha_de_Documento,
                letraAceptante: '',
                letraLateral: '',
                A1Cabeza: 'Sí',
                A1Pie: 'Sí',
                disabled: false,
            };
            let row2 = {
                esConyuge: true,
                tipo: 'CONYUGE TITULAR',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: '',
                A1Cabeza: 'Sí',
                A1Pie: 'Sí',
                disabled: false,
            };
            let row3 = {
                esConyuge: false,
                tipo: 'CO PROPIETARIO 1',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: '',
                A1Cabeza: 'Sí',
                A1Pie: 'Sí',
                disabled: false,
            };
            let row4 = {
                esConyuge: true,
                tipo: 'CONYUGE CO PROPIETARIO 1',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: '',
                A1Cabeza: 'Sí',
                A1Pie: 'Sí',
                disabled: false,
            };
            let row5 = {
                esConyuge: false,
                tipo: 'CO PROPIETARIO 2',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: '',
                A1Cabeza: 'Sí',
                A1Pie: 'Sí',
                disabled: false,
            };
            let row6 = {
                esConyuge: true,
                tipo: 'CONYUGE CO PROPIETARIO 2',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: '',
                A1Cabeza: 'Sí',
                A1Pie: 'Sí',
                disabled: false,
            };
            let row7 = {
                esConyuge: false,
                tipo: 'CO PROPIETARIO 3',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: '',
                A1Cabeza: 'Sí',
                A1Pie: 'Sí',
                disabled: false,
            };
            let row8 = {
                esConyuge: true,
                tipo: 'CONYUGE CO PROPIETARIO 3',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: '',
                A1Cabeza: 'Sí',
                A1Pie: 'Sí',
                disabled: false,
            };
            let row9 = {
                esConyuge: false,
                tipo: 'CO PROPIETARIO 4',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: '',
                A1Cabeza: 'Sí',
                A1Pie: 'Sí',
                disabled: false,
            };
            let row10 = {
                esConyuge: true,
                tipo: 'CONYUGE CO PROPIETARIO 4',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: '',
                A1Cabeza: 'Sí',
                A1Pie: 'Sí',
                disabled: false,
            };
            let row11 = {
                esConyuge: false,
                tipo: 'CO PROPIETARIO 5',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: '',
                A1Cabeza: 'Sí',
                A1Pie: 'Sí',
                disabled: false,
            };
            let row12 = {
                esConyuge: true,
                tipo: 'CONYUGE CO PROPIETARIO 5',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: '',
                A1Cabeza: 'Sí',
                A1Pie: 'Sí',
                disabled: false,
            };
            // ********************************



            let emp1 = {
                esConyuge: null,
                tipo: 'EMPRESA',
                nombre: {
                    "name": this.contactoRecord.Full_Name,
                    "id": this.contactoRecord.id
                },
                tipoDeDocumento: this.contactoRecord.Tipo_de_Documento,
                numeroDocumento: this.contactoRecord.N_mero_de_Documento,
                tipoPoder: this.contactoRecord.Tipo_de_Poder,
                tipoInscrito: this.contactoRecord.Poder_Inscrito,
                numeroPartida: this.contactoRecord.N_Partida,
                oficina: this.contactoRecord.Oficina,
                fechaDeDcto: this.contactoRecord.Fecha_de_Documento,
                letraAceptante: '',
                letraLateral: 'Sí',
                A1Cabeza: 'Sí',
                A1Pie: '',
                disabled: false,
            };
            let emp2 = {
                esConyuge: null,
                tipo: 'RRLL1',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: 'Sí',
                A1Cabeza: 'Sí',
                A1Pie: '',
                disabled: false,
            };
            let emp3 = {
                esConyuge: null,
                tipo: 'RRLL2',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: 'Sí',
                A1Cabeza: 'Sí',
                A1Pie: '',
                disabled: false,
            };
            // ********************************
            let tit1 = {
                esConyuge: null,
                tipo: 'TIT.MENOR',
                nombre: {
                    "name": this.contactoRecord.Full_Name,
                    "id": this.contactoRecord.id
                },
                tipoDeDocumento: this.contactoRecord.Tipo_de_Documento,
                numeroDocumento: this.contactoRecord.N_mero_de_Documento,
                tipoPoder: this.contactoRecord.Tipo_de_Poder,
                tipoInscrito: this.contactoRecord.Poder_Inscrito,
                numeroPartida: this.contactoRecord.N_Partida,
                oficina: this.contactoRecord.Oficina,
                fechaDeDcto: this.contactoRecord.Fecha_de_Documento,
                letraAceptante: '',
                letraLateral: 'Sí',
                A1Cabeza: 'Sí',
                A1Pie: '',
                disabled: false,
            };
            let tit2 = {
                esConyuge: false,
                tipo: 'PADRE',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: 'Sí',
                A1Cabeza: 'Sí',
                A1Pie: '',
                disabled: false,
            };
            let tit3 = {
                esConyuge: null,
                tipo: 'MADRE',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: 'Sí',
                A1Cabeza: 'Sí',
                A1Pie: '',
                disabled: false,
            };
            let apo = {
                esConyuge: null,
                tipo: 'APODERADO',
                nombre: '',
                tipoDeDocumento: '',
                numeroDocumento: '',
                tipoPoder: '',
                tipoInscrito: '',
                numeroPartida: '',
                oficina: null,
                fechaDeDcto: '',
                letraAceptante: '',
                letraLateral: '',
                A1Cabeza: 'Sí',
                A1Pie: '',
                disabled: false,
            };
            // 
            if (value == "TITULAR") {
                row1.letraAceptante = "Sí"; row1.letraLateral = "Sí";
                row2.letraAceptante = "Sí"; row2.letraLateral = "Sí";
                this.propietarios.push(row1, row2);
            }
            else if (value == "TITULAR + CO.PROP1") {
                row1.letraAceptante = "Sí"; row1.letraLateral = "Sí";
                row2.letraAceptante = "No"; row2.letraLateral = "No";
                row3.letraAceptante = "Sí"; row3.letraLateral = "Sí";
                row4.letraAceptante = "No"; row4.letraLateral = "No";
                this.propietarios.push(row1, row2, row3, row4);
            }
            else if (value == "TITULAR + CO.PROP1 + CO.PROP2") {
                row1.letraAceptante = "Sí"; row1.letraLateral = "Sí";
                row2.letraAceptante = "No"; row2.letraLateral = "No";
                row3.letraAceptante = "Sí"; row3.letraLateral = "Sí";
                row4.letraAceptante = "No"; row4.letraLateral = "No";
                row5.letraAceptante = "No"; row5.letraLateral = "No";
                row6.letraAceptante = "No"; row6.letraLateral = "No";
                this.propietarios.push(row1, row2, row3, row4, row5, row6);
            }
            else if (value == "TITULAR + CO.PROP1 + CO.PROP2 + CO.PROP3") {
                row1.letraAceptante = "Sí"; row1.letraLateral = "Sí";
                row2.letraAceptante = "No"; row2.letraLateral = "No";
                row3.letraAceptante = "Sí"; row3.letraLateral = "Sí";
                row4.letraAceptante = "No"; row4.letraLateral = "No";
                row5.letraAceptante = "No"; row5.letraLateral = "No";
                row6.letraAceptante = "No"; row6.letraLateral = "No";
                row7.letraAceptante = "No"; row7.letraLateral = "No";
                row8.letraAceptante = "No"; row8.letraLateral = "No";
                this.propietarios.push(row1, row2, row3, row4, row5, row6, row7, row8);
            }
            else if (value == "TITULAR + CO.PROP1 + CO.PROP2 + CO.PROP3 + CO.PROP4") {
                row1.letraAceptante = "Sí"; row1.letraLateral = "Sí";
                row2.letraAceptante = "No"; row2.letraLateral = "No";
                row3.letraAceptante = "Sí"; row3.letraLateral = "Sí";
                row4.letraAceptante = "No"; row4.letraLateral = "No";
                row5.letraAceptante = "No"; row5.letraLateral = "No";
                row6.letraAceptante = "No"; row6.letraLateral = "No";
                row7.letraAceptante = "No"; row7.letraLateral = "No";
                row8.letraAceptante = "No"; row8.letraLateral = "No";
                row9.letraAceptante = "No"; row9.letraLateral = "No";
                row10.letraAceptante = "No"; row10.letraLateral = "No";
                this.propietarios.push(row1, row2, row3, row4, row5, row6, row7, row8, row9, row10);
            }
            else if (value == "TITULAR + CO.PROP1 + CO.PROP2 + CO.PROP3 + CO.PROP4 + CO.PROP5") {
                row1.letraAceptante = "Sí"; row1.letraLateral = "Sí";
                row2.letraAceptante = "No"; row2.letraLateral = "No";
                row3.letraAceptante = "Sí"; row3.letraLateral = "Sí";
                row4.letraAceptante = "No"; row4.letraLateral = "No";
                row5.letraAceptante = "No"; row5.letraLateral = "No";
                row6.letraAceptante = "No"; row6.letraLateral = "No";
                row7.letraAceptante = "No"; row7.letraLateral = "No";
                row8.letraAceptante = "No"; row8.letraLateral = "No";
                row9.letraAceptante = "No"; row9.letraLateral = "No";
                row10.letraAceptante = "No"; row10.letraLateral = "No";
                row11.letraAceptante = "No"; row11.letraLateral = "No";
                row12.letraAceptante = "No"; row12.letraLateral = "No";
                this.propietarios.push(row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12);
            } else if (value == "EMPRESA + RRLL1") {
                emp1.letraAceptante = "Sí"; emp1.A1Pie = "No";
                emp2.letraAceptante = "No"; emp2.A1Pie = "Sí";
                this.propietarios.push(emp1, emp2);
            } else if (value == "EMPRESA + RRLL1 + RRLL2") {
                emp1.letraAceptante = "Sí"; emp1.A1Pie = "No";
                emp2.letraAceptante = "No"; emp2.A1Pie = "Sí";
                emp3.letraAceptante = "No"; emp3.A1Pie = "Sí";
                this.propietarios.push(emp1, emp2, emp3);
            } else if (value == "TIT.MENOR + PADRE Y MADRE") {
                tit1.letraAceptante = "Sí"; tit1.A1Pie = "No";
                tit2.letraAceptante = "No"; tit2.A1Pie = "Sí";
                tit3.letraAceptante = "No"; tit3.A1Pie = "Sí";
                this.propietarios.push(tit1, tit2, tit3);
            } else if (value == "TIT.MENOR + PADRE") {
                tit1.letraAceptante = "Sí"; tit1.A1Pie = "No";
                tit2.letraAceptante = "No"; tit2.A1Pie = "Sí";
                this.propietarios.push(tit1, tit2);
            } else if (value == "TIT.MENOR + MADRE") {
                tit1.letraAceptante = "Sí"; tit1.A1Pie = "No";
                tit3.letraAceptante = "No"; tit3.A1Pie = "Sí";
                this.propietarios.push(tit1, tit3);
            } else if (value == "TITULAR + APODERADO") {
                row1.letraAceptante = "Sí"; row1.letraLateral = "Sí"; row1.A1Pie = "No";
                row2.letraAceptante = "Sí"; row2.letraLateral = "No"; row2.A1Pie = "No";
                apo.letraAceptante = "No"; apo.letraLateral = "Sí"; apo.A1Pie = "Sí";
                this.propietarios.push(row1, row2, apo);
            }
            //Evaluar deshabilitar titular inicial
            this.obtenerDatosAdicionales(row1.nombre, row1, 0);
            // console.log(this.propietarios);
        },
        proforma: function (value) {
            console.log(value)
            console.log(this.montoBBP);

            if (value == "Hipotecario") {
                if (this.montoBBP == 0) {
                    this.hipotecario.bonoBP = 'No';
                    this.hipotecario.montoBBP = this.montoBBP;
                    this.hipotecario.bonoVerde = 'No';
                    this.hipotecario.montoBonoVerde = 0;
                } else {
                    this.hipotecario.bonoBP = 'Sí';
                    this.hipotecario.montoBBP = this.montoBBP;
                    this.hipotecario.bonoVerde = 'Sí';
                    this.hipotecario.montoBonoVerde = 5100;

                }
            } else if (value == 'Plan Ahorro') {
                if (this.montoBBP == 0) {
                    this.planAhorro.bonoBP = 'No';
                    this.planAhorro.montoBBP = this.montoBBP;
                    this.planAhorro.bonoVerde = 'No'
                    this.planAhorro.montoBonoVerde = 0;
                } else {
                    this.planAhorro.bonoBP = 'Sí';
                    this.planAhorro.montoBBP = this.montoBBP;
                    this.planAhorro.bonoVerde = 'Sí'
                    this.planAhorro.montoBonoVerde = 5100;
                }

            }
        }

    },
    methods: {

        status(validation) {
            return {
                error: validation.$error,
                dirty: validation.$dirty
            }
        },
        initZSDK: function () {
            const self = this;
            ZOHO.embeddedApp.init()
                .then(function () {
                    ZOHO.CRM.UI.Resize({
                        height: "70%",
                        width: "70%"
                    }).then(function (data) {
                        console.log(data);
                    });
                });
        },
        closeReloadWidget: function () {
            ZOHO.CRM.UI.Popup.closeReload()
                .then(function (data) {
                    // console.log(data);
                })
        },
        cancelar: function () {
            ZOHO.CRM.UI.Popup.close()
                .then(function (data) {
                    // console.log(data)
                })
        },
        onLoad: function () {
            const self = this;
            let oportunidadRecord = null;
            let montoBonoBuenPagador = 0;

            ZOHO.embeddedApp.on("PageLoad", async function (data) {

                try {

                    self.loading_widget = true;

                    self.entity.id = data.EntityId[0];
                    self.entity.module = data.Entity;


                    oportunidadRecord = await self.getRecord(data.Entity, data.EntityId);
                    self.moneda = oportunidadRecord.Currency;

                    await self.validarProformaCreada(oportunidadRecord);
                    self.contactoRecord = await self.getContactRecord(oportunidadRecord);

                    montoBonoBuenPagador = await self.getBonoBuenPagador(oportunidadRecord);
                    self.montoBBP = montoBonoBuenPagador;

                    self.tipoComprador = await self.getTipoComprador(oportunidadRecord);
                    console.log(self.tipoComprador);

                    await self.insertOptionsTipoVenta(self.tipoComprador);
                    await self.getAllContacts();
                    await self.getOrganizationInformation();
                    await self.getCurrentUser();
                } catch (error) {
                    console.log(error);
                } finally {
                    self.loading_widget = false;
                }




            });
        },
        getOrganizationInformation: async function () {
            try {
                let response = await ZOHO.CRM.CONFIG.getOrgInfo();
                // console.log(response);
                this.meta.organization.id = response.org[0].zgid
            } catch (error) {
                console.error(error)
            }
        },
        getCurrentUser: async function () {
            try {
                let response = await ZOHO.CRM.CONFIG.getCurrentUser()
                // console.log(response);
                this.meta.currentUser.id = response.users[0].id;
                this.meta.currentUser.firstName = response.users[0].first_name;
                this.meta.currentUser.fullName = response.users[0].full_name;
                this.meta.currentUser.lastName = response.users[0].last_name;
                this.meta.currentUser.email = response.users[0].email;
                this.meta.currentUser.role = response.users[0].role;
                this.meta.currentUser.profile = response.users[0].profile;
            } catch (error) {
                console.error(error)
            }
        },
        getRecordLink: function (module, id) {
            return `https://crm.zoho.com/crm/org${this.meta.organization.id}/tab/${module}/${id}`
        },
        getRecord: async function (module, id) {
            let response = await ZOHO.CRM.API.getRecord({ Entity: module, RecordID: id })
            let data = response.data[0];
            return data;

        },
        guardarDatos: async function () {
            try {
                this.loading = true

                if (this.proforma == 'Contado') {
                    console.log("Se guardo los datos exitosamente");
                    console.log(this.propietarios);
                    let response = await this.executeFunctionZohoContado();
                    console.log(response);
                    if (response.code == 'success') {

                        let message = response.details.output;
                        let parse_response = JSON.parse(message);
                        console.log(parse_response);
                        if (parse_response.ok == true) {
                            let { id, module } = parse_response;
                            this.openUIRecord(module, id);
                            return;
                        } else {
                            this.message = parse_response.message;
                            $('#respuestaProforma').modal();
                        }


                    }

                } else if (this.proforma == 'Hipotecario') {

                    console.log("Se guardo los datos exitosamente");
                    console.log(this.propietarios);
                    let response = await this.executeFunctionZohoHipotecario();
                    console.log(response);
                    if (response.code == 'success') {
                        let message = response.details.output;
                        let parse_response = JSON.parse(message);
                        console.log(parse_response);
                        if (parse_response.ok == true) {
                            let { id, module } = parse_response;
                            this.openUIRecord(module, id);
                            return;
                        } else {
                            this.message = parse_response.message;
                            $('#respuestaProforma').modal();
                        }
                    }
                } else if (this.proforma == 'Directo') {

                    console.log("Se guardo los datos exitosamente");
                    console.log(this.propietarios);
                    let response = await this.executeFunctionZohoDirecto();
                    console.log(response);
                    if (response.code == 'success') {
                        let message = response.details.output;
                        let parse_response = JSON.parse(message);
                        console.log(parse_response);
                        if (parse_response.ok == true) {
                            let { id, module } = parse_response;
                            this.openUIRecord(module, id);
                            return;
                        } else {
                            this.message = parse_response.message;
                            $('#respuestaProforma').modal();
                        }
                    }
                } else if (this.proforma == 'Plan Ahorro') {
                    
                    console.log("Se guardo los datos exitosamente");
                    console.log(this.propietarios);
                    let response = await this.executeFunctionZohoAhorro();
                    console.log(response);
                    if (response.code == 'success') {
                        let message = response.details.output;
                        let parse_response = JSON.parse(message);
                        console.log(parse_response);
                        if (parse_response.ok == true) {
                            let { id, module } = parse_response;
                            this.openUIRecord(module, id);
                            return;
                        } else {
                            this.message = parse_response.message;
                            $('#respuestaProforma').modal();
                        }
                    }
                }

            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false
            }

        },
        siguiente: function () {
            this.show.primero = false;
            this.show.segundo = true;
            this.show.siguiente = false;
            this.show.anterior = true;
        },
        anterior: function () {
            this.show.primero = true;
            this.show.segundo = false;
            this.show.siguiente = true;
            this.show.anterior = false;
        },
        getAllContacts: async function () {
            let more_records = false;
            let records = [];
            page = 1;
            do {
                let contactos = await ZOHO.CRM.API.getAllRecords({ Entity: "Contacts", sort_order: "asc", per_page: 200, page });
                // console.log(contactos);
                more_records = contactos.info.more_records;
                // console.log(more_records);
                Array.prototype.push.apply(records, contactos.data);
                page = page + 1;
            } while (more_records);
            this.contactosRegistrados = records;
            let filtered_records = records.map(({ id, Full_Name }) => {
                return { "id": id, "name": Full_Name };
            });
            // console.log(filtered_records);
            this.options = filtered_records;
        },
        obtenerDatosAdicionalesModel: function (nombre, propietario, index) {
            index = parseInt(index);
            console.log(index);
            console.log(nombre);
            console.log(propietario);
            let record = this.contactosRegistrados.filter(({ id }) => id == nombre.$model.id)[0];
            let tipoDocumento = "";
            let numeroDocumento = "";
            let estadoCivil = "";
            let tipoDePoder = "";
            let bloquearSiguiente = false;
            console.log(record);
            if (record != null) {
                tipoDocumento = record.Tipo_de_Documento;
                numeroDocumento = record.N_mero_de_Documento;
                estadoCivil = record.Estado_Civil;
                tipoDePoder = record.Tipo_de_Poder;

                // 
                propietario.tipoDeDocumento.$model = tipoDocumento;
                propietario.numeroDocumento.$model = numeroDocumento;
                propietario.tipoPoder.$model = tipoDePoder;
                propietario.tipoInscrito.$model = record.Poder_Inscrito;
                propietario.numeroPartida.$model = record.N_Partida;
                propietario.oficina.$model = record.Oficina;
                if (propietario.$model.esConyuge != null) {
                    if (propietario.$model.esConyuge == false) {
                        if (estadoCivil == "Soltero") {
                            bloquearSiguiente = true;
                        }
                        if (bloquearSiguiente) {
                            console.log(this.propietarios);
                            console.log(index + 1);
                            this.propietarios[index + 1].disabled = true;
                        } else {
                            this.propietarios[index + 1].disabled = false;
                        }
                        if (tipoDePoder == "Separación de Bienes") {
                            this.propietarios[index + 1].A1Pie = "No";
                        }
                    }
                }
            } else {
                if (propietario.esConyuge != null) {
                    if (propietario.esConyuge == false) {
                        if (estadoCivil == "Soltero") {
                            bloquearSiguiente = true;
                        }
                        if (bloquearSiguiente) {
                            this.propietarios[index + 1].disabled = true;
                        } else {
                            this.propietarios[index + 1].disabled = false;
                        }
                        if (tipoDePoder == "Separación de Bienes") {
                            this.propietarios[index + 1].A1Pie = "No";
                        }
                    }
                }
            }
        },
        obtenerDatosAdicionales: function (nombre, propietario, index) {

            console.log("aea");

            let record = this.contactosRegistrados.filter(({ id }) => id == nombre.id)[0];
            // console.log(record);
            let tipoDocumento = "";
            let numeroDocumento = "";
            let estadoCivil = "";
            let tipoDePoder = "";
            let bloquearSiguiente = false;
            if (record != null) {
                tipoDocumento = record.Tipo_de_Documento;
                numeroDocumento = record.N_mero_de_Documento;
                estadoCivil = record.Estado_Civil;
                tipoDePoder = record.Tipo_de_Poder;
                // 
                propietario.tipoDeDocumento = tipoDocumento;
                propietario.numeroDocumento = numeroDocumento;


                if (propietario.esConyuge != null) {
                    if (this.tipoComprador == "Persona Natural") {
                        if (propietario.esConyuge == false) {
                            if (estadoCivil == "Soltero") {
                                bloquearSiguiente = true;
                            }
                            if (bloquearSiguiente) {
                                console.log(this.propietarios);
                                this.propietarios[index + 1].disabled = true;
                                console.log(this.propietarios);
                            } else {
                                this.propietarios[index + 1].disabled = false;
                            }
                            if (tipoDePoder == "Separación de Bienes") {
                                this.propietarios[index + 1].A1Pie = "No";
                            }
                        }
                    }
                }
            } else {
                if (propietario.esConyuge != null) {
                    if (this.tipoComprador == "Persona Natural") {
                        if (propietario.esConyuge == false) {
                            if (estadoCivil == "Soltero") {
                                bloquearSiguiente = true;
                            }
                            if (bloquearSiguiente) {
                                this.propietarios[index + 1].disabled = true;
                            } else {
                                this.propietarios[index + 1].disabled = false;
                            }
                            if (tipoDePoder == "Separación de Bienes") {
                                this.propietarios[index + 1].A1Pie = "No";
                            }
                        }
                    }
                }
            }
        },
        isDisabled: function (propietario) {
            if (propietario.disabled == true) {
                return true;
            }
            return false;
        },
        insertOptionsTipoVenta: function (tipoComprador) {
            console.log(tipoComprador);
            let options = [];
            if (tipoComprador == "Menor de Edad") {
                let opt1 = { "label": "TIT.MENOR + PADRE Y MADRE", "value": "TIT.MENOR + PADRE Y MADRE" };
                let opt2 = { "label": "TIT.MENOR + PADRE", "value": "TIT.MENOR + PADRE" };
                let opt3 = { "label": "TIT.MENOR + MADRE", "value": "TIT.MENOR + MADRE" };
                options.push(opt1, opt2, opt3);
            } else if (tipoComprador == "Persona Juridica") {
                let opt1 = { "label": "EMPRESA + RRLL1", "value": "EMPRESA + RRLL1" };
                let opt2 = { "label": "EMPRESA + RRLL1 + RRLL2", "value": "EMPRESA + RRLL1 + RRLL2" };
                options.push(opt1, opt2);
            } else {
                let opt1 = { "label": "TITULAR", "value": "TITULAR" };
                let opt2 = { "label": "TITULAR + CO.PROP1", "value": "TITULAR + CO.PROP1" };
                let opt3 = { "label": "TITULAR + CO.PROP1 + CO.PROP2", "value": "TITULAR + CO.PROP1 + CO.PROP2" };
                let opt4 = { "label": "TITULAR + CO.PROP1 + CO.PROP2 + CO.PROP3", "value": "TITULAR + CO.PROP1 + CO.PROP2 + CO.PROP3" };
                let opt5 = { "label": "TITULAR + CO.PROP1 + CO.PROP2 + CO.PROP3 + CO.PROP4", "value": "TITULAR + CO.PROP1 + CO.PROP2 + CO.PROP3 + CO.PROP4" };
                let opt6 = { "label": "TITULAR + CO.PROP1 + CO.PROP2 + CO.PROP3 + CO.PROP4 + CO.PROP5", "value": "TITULAR + CO.PROP1 + CO.PROP2 + CO.PROP3 + CO.PROP4 + CO.PROP5" };
                let opt7 = { "label": "TITULAR + APODERADO", "value": "TITULAR + APODERADO" };
                options.push(opt1, opt2, opt3, opt4, opt5, opt6, opt7);
            }
            // console.log(options);
            this.optionsTipoVenta = options;
        },
        getTipoComprador: async function (oportunidadRecord) {
            let contacto = oportunidadRecord.Contact_Name;
            // console.log(contacto);
            let tipoComprador = "";
            if (contacto != null) {
                contactoId = contacto.id;
                contactoRecord = await this.getRecord("Contacts", contactoId);
                tipoComprador = contactoRecord.Tipo_de_Comprador;
            }
            return tipoComprador;
        },
        getBonoBuenPagador: async function (oportunidad) {

            let importe = oportunidad.Amount || 0;
            let proyecto = oportunidad.Proyecto2;
            let contacto = oportunidad.Contact_Name;
            let montoBonoBuenPagador = 0;
            console.log(proyecto);
            if (proyecto != null) {

                let proyecto_record = await this.getRecord("Proyectos", proyecto.id);
                if (contacto != null) {
                    console.log(contacto);
                    let contacto_record = await this.getRecord("Contacts", contacto.id);
                    let accedeBonoBuenPagador = proyecto_record.Bono_Buen_Pagador;
                    let primera_vivienda = contacto_record.Primera_Vivienda;
                    if (primera_vivienda != null) {
                        console.log('Accede a bono buen pagador', accedeBonoBuenPagador);
                        console.log('Accede a primera vivienda', primera_vivienda)
                        console.log(importe);
                        if (accedeBonoBuenPagador && primera_vivienda == 'Si') {
                            if (importe > 61200 && importe <= 87400) {
                                montoBonoBuenPagador = 24600;
                            } else if (importe > 87400 && importe <= 130900) {
                                montoBonoBuenPagador = 20500;
                            } else if (importe > 130900 && importe <= 218100) {
                                montoBonoBuenPagador = 18800;
                            } else if (importe > 218100 && importe <= 323100) {
                                montoBonoBuenPagador = 10300;
                            } else {
                                montoBonoBuenPagador = 0;
                            }
                        }
                    }

                }
                // console.log(proyecto_record);

            }
            console.log(montoBonoBuenPagador);



            return montoBonoBuenPagador;
        },
        getContactRecord: function (oportunidad) {
            let contacto = oportunidad.Contact_Name;
            let contactoRecord = null;
            if (contacto != null) {
                let contacto_id = contacto.id;
                contactoRecord = this.getRecord("Contacts", contacto_id);
            }
            return contactoRecord;
        },
        executeFunctionZohoContado: async function () {
            // https://www.zohoapis.com/crm/v2/functions/sa_crear_proforma_desde_widget/actions/execute?auth_type=oauth
            console.log(this.entity.id);
            let func_name = "sa_crear_proforma_desde_widget";
            let req_data = {
                "arguments": JSON.stringify({
                    "id": this.entity.id,
                    "propietarios": this.propietarios,
                    "fecha_vencimiento": this.contado.fechaVencimiento,
                    "banco": this.contado.banco,
                    "tipo_financiamiento": this.proforma,
                    "tipo_venta": this.tipoDeVenta
                })
            };
            console.log(req_data);
            let response = await ZOHO.CRM.FUNCTIONS.execute(func_name, req_data);
            return response;
        },
        executeFunctionZohoDirecto: async function () {
            let func_name = "sa_crear_proforma_desde_widget_directo";
            let req_data = {
                "arguments": JSON.stringify({
                    "id": this.entity.id,
                    "propietarios": this.propietarios,
                    "fecha_vencimiento": this.directo.fechaVencimiento,
                    "cuota_inicial_fraccionada": this.directo.cuotaInicial,
                    "numero_cuotas_fraccionada": this.directo.numeroCuotas || 0,
                    "banco": this.directo.banco,
                    "letras": this.directo.letras,
                    "tipo_cuotas": this.directo.tiposDeCuotas,
                    "tipo_financiamiento": this.proforma,
                })
            };
            console.log(req_data);
            let response = await ZOHO.CRM.FUNCTIONS.execute(func_name, req_data);
            return response;
        },
        executeFunctionZohoHipotecario: async function () {
            // https://www.zohoapis.com/crm/v2/functions/sa_crear_proforma_desde_widget_hipotecario/actions/execute?auth_type=oauth
            let func_name = "sa_crear_proforma_desde_widget_hipotecario";
            let req_data = {
                "arguments": JSON.stringify({
                    "id": this.entity.id,
                    "propietarios": this.propietarios,
                    "fecha_vencimiento": this.hipotecario.fechaVencimiento,
                    "cuota_inicial_fraccionada": this.hipotecario.cuotaInicial,
                    "numero_cuotas_fraccionada": this.hipotecario.numeroCuotas || 0,
                    "banco": this.hipotecario.banco,
                    "AFP": this.hipotecario.AFP,
                    "monto_AFP": this.hipotecario.montoAFP || 0,
                    "bonoBP": this.hipotecario.bonoBP,
                    "monto_bono_BP": this.hipotecario.montoBBP || 0,
                    "bono_verde": this.hipotecario.bonoVerde,
                    "monto_bono_verde": this.hipotecario.montoBonoVerde || 0,
                    "tipo_venta": this.tipoDeVenta,
                    "tipo_financiamiento": this.proforma,
                    "regalo": this.hipotecario.regalo,
                    "porcentaje_regalo": this.hipotecario.porcentaje_regalo || 0,

                })
            };
            console.log(req_data);
            let response = await ZOHO.CRM.FUNCTIONS.execute(func_name, req_data);
            return response;
        },
        executeFunctionZohoAhorro: async function () {
            // https://www.zohoapis.com/crm/v2/functions/sa_crear_proforma_desde_widget_ahorro/actions/execute?auth_type=oauth

            let func_name = "sa_crear_proforma_desde_widget_ahorro";
            let req_data = {
                "arguments": JSON.stringify({
                    "id": this.entity.id,
                    "propietarios": this.propietarios,
                    "fecha_vencimiento": this.planAhorro.fechaVencimiento,
                    "banco": this.planAhorro.banco,
                    "AFP": this.planAhorro.AFP,
                    "monto_AFP": this.planAhorro.montoAFP || 0,
                    "numero_cuenta": this.planAhorro.numeroCuenta,
                    "bono_BP": this.planAhorro.bonoBP,
                    "monto_bono_BP": this.planAhorro.montoBBP || 0,
                    "bono_verde": this.planAhorro.bonoVerde,
                    "monto_bono_verde": this.planAhorro.montoBonoVerde || 0,
                    "cuotas_plan_ahorro": this.planAhorro.cuotasPlanAhorro,
                    "tipo_venta": this.tipoDeVenta,
                    "tipo_financiamiento": this.proforma,
                })
            };
            console.log(req_data);
            let response = await ZOHO.CRM.FUNCTIONS.execute(func_name, req_data);
            return response;
        },
        buscarContacto: async function (propietario, index) {
            let isInCRM = false;
            console.log(propietario.tipoDeDocumento);
            console.log(propietario.numeroDocumento);
            if (propietario.tipoDeDocumento == null) {
                alert("Seleccione un tipo de documento");
                return 0;
            }

            let response = await this.searchRecordContact(propietario.tipoDeDocumento.$model, propietario.numeroDocumento.$model);
            console.log(response);
            if (response.hasOwnProperty('data')) {
                isInCRM = true;
            }
            if (!isInCRM) {
                // alert("No se ha encontrado al usuario");
                this.message = "No se encontó al Contacto, Desea realizar una creacion rápida ?";
                $('#exampleModal').modal()
                let crearRegistro = document.getElementById("nuevoContacto");
                const self = this;
                crearRegistro.addEventListener("click", async function (e) {
                    await self.createNewContact(propietario, index);
                });
            } else {

                let data = response.data[0];
                let full_name = data.Full_Name;
                let idContacto = data.id;
                propietario.nombre.$model = { "name": full_name, "id": idContacto };
                this.obtenerDatosAdicionalesModel(propietario.nombre, propietario, index);
            }
        },
        searchRecordContact: async function (tipo, numero) {
            let response = await ZOHO.CRM.API.searchRecord({ Entity: "Contacts", Type: "criteria", Query: `((Tipo_de_Documento:equals:${tipo})and(N_mero_de_Documento:equals:${numero}))` });
            return response;

        },
        createNewContact: function (propietario, index) {
            console.log(propietario);
            $('#exampleModal').modal('hide');
            $('#newContact').modal();
            this.newContact.nombre = "";
            this.newContact.apellido = "";
            this.newContact.tipoDocumento = propietario.tipoDeDocumento.$model;
            this.newContact.numeroDocumento = propietario.numeroDocumento.$model;
            const self = this;
            console.log(this.newContact);
            document.getElementById("guardarContacto").addEventListener("click", async function (e) {
                console.log(self.newContact);
                let data = await self.insertRecord(self.newContact);
                if (data.code != "SUCCESS") {
                    this.message = "error";
                    return;
                }
                console.log(data);
                console.log(propietario);
                let idContacto = data.details.id;
                let full_name = self.newContact.nombre + " " + self.newContact.apellido;
                propietario.nombre.$model = { "name": full_name, "id": idContacto };
                self.obtenerDatosAdicionalesModel(propietario.nombre, propietario, index);
                $('#newContact').modal('hide');
            })
        },
        insertRecord: async function (newContact) {
            var recordData = {
                "First_Name": newContact.nombre,
                "Last_Name": newContact.apellido,
                "Tipo_de_Documento": newContact.tipoDocumento,
                "N_mero_de_Documento": newContact.numeroDocumento,
            }
            let response = await ZOHO.CRM.API.insertRecord({ Entity: "Contacts", APIData: recordData, Trigger: ["workflow"] });
            let data = response.data[0];
            return data;
        },
        validarProformaCreada: async function (oportunidad_record) {
            const self = this;
            console.log("validar");
            let oportunidad_id = oportunidad_record.id;
            let response = await ZOHO.CRM.API.getRelatedRecords({ Entity: "Deals", RecordID: oportunidad_id, RelatedList: "Proformas", page: 1, per_page: 200 })
            if (response.hasOwnProperty('data')) {
                let data_proformas = response.data;
                // let data = response.data[0];

                data_proformas.sort((a, b) => (a.Created_Time < b.Created_Time) ? 1 : -1);
                data = data_proformas[0];


                console.log("Estado", data.Estado);
                if (data.Estado != "Anulado") {
                    this.tiene_proforma_activa = true;
                    this.message = "No puede crear una proforma, ya posee una proforma creada";
                }
            }
        },
        openUIRecord: async function (module, id) {

            let response = await ZOHO.CRM.UI.Record.open({ Entity: module, RecordID: id });
            console.log(response);


        }

    },
    created: function () {
        this.onLoad();
        this.initZSDK();
        ZOHO.embeddedApp.init();

    },
})