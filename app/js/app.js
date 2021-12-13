Vue.component('vue-multiselect', window.VueMultiselect.default)
Vue.component('v-select', VueSelect.VueSelect);
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
        fechaVencimiento: '',
        banco: '',
        AFP: '',
        numeroCuenta: '',
        bonoBP: '',
        montoBBP: null,
        bonoVerde: '',
        montoBonoVerde: null,
        cuotasPlanAhorro: '',
        // 
        tipoDeVenta: '',
        propietarios: [],
        // 
        proforma: '',
        hipotecario: {
            fechaVencimiento: '',
            banco: '',
            AFP: '',
            bonoBP: '',
            montoBBP: null,
            bonoVerde: '',
            montoBonoVerde: null,
        },
        planAhorro: {
            fechaVencimiento: '',
            banco: '',
            AFP: '',
            numeroCuenta: '',
            bonoBP: '',
            montoBBP: null,
            bonoVerde: '',
            montoBonoVerde: null,
            cuotasPlanAhorro: '',
        },
        directo: {
            fechaVencimiento: '',
            banco: '',
            letras: '',
            tiposDeCuotas: ''
        },
        options: [
            'foo',
            'bar',
            'baz'
        ]

    },
    validations: {
        fechaVencimiento: {
            required,
        },
        banco: {
            required,
        },
        AFP: {
            required,
        },
        numeroCuenta: {
            required: requiredIf(function (nestedModel) {
                return this.AFP == "Sí";
            }),
        },
        bonoBP: {
            required,
        },
        montoBBP: {
            required: requiredIf(function (nestedModel) {
                return this.montoBBP == "Sí";
            }),

        },
        bonoVerde: {
            required,
        },
        montoBonoVerde: {
            required: requiredIf(function (nestedModel) {
                return this.bonoVerde == "Sí";
            }),
        },
        cuotasPlanAhorro: {
            required,
            numeric
        },
        tipoDeVenta: {
            required,
        },
        proforma: {
            required,
        }

    },
    watch: {
        tipoDeVenta: function (value) {
            console.log(value);
            this.propietarios = [];
            // 
            let row1 = {
                tipo: 'TITULAR',
                nombre: '',
                tipoDeDocumento: '',
            };
            let row2 = {
                tipo: 'CONYUGE TITULAR',
                nombre: '',
                tipoDeDocumento: '',
            };
            let row3 = {
                tipo: 'CO PROPIETARIO 1',
                nombre: '',
                tipoDeDocumento: '',
            };
            let row4 = {
                tipo: 'CONYUGE CO PROPIETARIO 1',
                nombre: '',
                tipoDeDocumento: '',
            };
            let row5 = {
                tipo: 'CO PROPIETARIO 2',
                nombre: '',
                tipoDeDocumento: '',
            };
            let row6 = {
                tipo: 'CONYUGE CO PROPIETARIO 2',
                nombre: '',
                tipoDeDocumento: '',
            };
            let row7 = {
                tipo: 'CO PROPIETARIO 3',
                nombre: '',
                tipoDeDocumento: '',
            };
            let row8 = {
                tipo: 'CONYUGE CO PROPIETARIO 3',
                nombre: '',
                tipoDeDocumento: '',
            };
            let row9 = {
                tipo: 'CO PROPIETARIO 4',
                nombre: '',
                tipoDeDocumento: '',
            };
            let row10 = {
                tipo: 'CONYUGE CO PROPIETARIO 4',
                nombre: '',
                tipoDeDocumento: '',
            };
            let row11 = {
                tipo: 'CO PROPIETARIO 5',
                nombre: '',
                tipoDeDocumento: '',
            };
            let row12 = {
                tipo: 'CONYUGE CO PROPIETARIO 5',
                nombre: '',
                tipoDeDocumento: '',
            };
            // ********************************

            let emp1 = {
                tipo: 'EMPRESA',
                nombre: '',
                tipoDeDocumento: '',
            };
            let emp2 = {
                tipo: 'RRLL1',
                nombre: '',
                tipoDeDocumento: '',
            };
            let emp3 = {
                tipo: 'RRLL2',
                nombre: '',
                tipoDeDocumento: '',
            };
            // ********************************
            let tit1 = {
                tipo: 'TIT.MENOR',
                nombre: '',
                tipoDeDocumento: '',
            };
            let tit2 = {
                tipo: 'PADRE',
                nombre: '',
                tipoDeDocumento: '',
            };
            let tit3 = {
                tipo: 'MADRE',
                nombre: '',
                tipoDeDocumento: '',
            };
            let tit4 = {
                tipo: 'APODERADO',
                nombre: '',
                tipoDeDocumento: '',
            };
            // 
            if (value == "TITULAR") {

                this.propietarios.push(row1);
                this.propietarios.push(row2);
            }
            else if (value == "TITULAR + CO.PROP1") {
                this.propietarios.push(row1);
                this.propietarios.push(row2);
                this.propietarios.push(row3);
                this.propietarios.push(row4);
            }
            else if (value == "TITULAR + CO.PROP1 + CO.PROP2") {
                this.propietarios.push(row1);
                this.propietarios.push(row2);
                this.propietarios.push(row3);
                this.propietarios.push(row4);
                this.propietarios.push(row5);
                this.propietarios.push(row6);
            }
            else if (value == "TITULAR + CO.PROP1 + CO.PROP2 + CO.PROP3") {
                this.propietarios.push(row1);
                this.propietarios.push(row2);
                this.propietarios.push(row3);
                this.propietarios.push(row4);
                this.propietarios.push(row5);
                this.propietarios.push(row6);
                this.propietarios.push(row7);
                this.propietarios.push(row8);
            }
            else if (value == "TITULAR + CO.PROP1 + CO.PROP2 + CO.PROP3 + CO.PROP4") {
                this.propietarios.push(row1);
                this.propietarios.push(row2);
                this.propietarios.push(row3);
                this.propietarios.push(row4);
                this.propietarios.push(row5);
                this.propietarios.push(row6);
                this.propietarios.push(row7);
                this.propietarios.push(row8);
                this.propietarios.push(row9);
                this.propietarios.push(row10);
            }
            else if (value == "TITULAR + CO.PROP1 + CO.PROP2 + CO.PROP3 + CO.PROP4 + CO.PROP5") {
                this.propietarios.push(row1);
                this.propietarios.push(row2);
                this.propietarios.push(row3);
                this.propietarios.push(row4);
                this.propietarios.push(row5);
                this.propietarios.push(row6);
                this.propietarios.push(row7);
                this.propietarios.push(row8);
                this.propietarios.push(row9);
                this.propietarios.push(row10);
                this.propietarios.push(row11);
                this.propietarios.push(row12);
            } else if (value == "EMPRESA + RRLL1") {
                this.propietarios.push(emp1);
                this.propietarios.push(emp2);
            } else if (value == "EMPRESA + RRLL1 + RRLL2") {
                this.propietarios.push(emp1);
                this.propietarios.push(emp2);
                this.propietarios.push(emp3);
            } else if (value == "TIT.MENOR + PADRE Y MADRE") {
                this.propietarios.push(tit1);
                this.propietarios.push(tit2);
                this.propietarios.push(tit3);
            } else if (value == "TIT.MENOR + PADRE") {
                this.propietarios.push(tit1);
                this.propietarios.push(tit2);
            } else if (value == "TIT.MENOR + MADRE") {
                this.propietarios.push(tit1);
                this.propietarios.push(tit3);
            } else if (value == "TIT.MENOR + APODERADO") {
                this.propietarios.push(tit1);
                this.propietarios.push(tit4);
            }

            console.log(this.propietarios);
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
                        height: "1200",
                        width: "1200"
                    })
                });
        },
        closeReloadWidget: function () {
            ZOHO.CRM.UI.Popup.closeReload()
                .then(function (data) {
                    console.log(data);
                })
        },
        onLoad: function () {
            const self = this;
            ZOHO.embeddedApp.on("PageLoad", async function (data) {
                console.log(data);
                self.entity.id = data.EntityId;
                self.entity.module = data.Entity;
                console.log(self.entity.id);

                await self.getAllContacts();
                await self.getOrganizationInformation();
                await self.getCurrentUser();


            });
        },
        getOrganizationInformation: async function () {
            try {
                let response = await ZOHO.CRM.CONFIG.getOrgInfo();
                console.log(response);
                this.meta.organization.id = response.org[0].zgid
            } catch (error) {
                console.error(error)
            }
        },
        getCurrentUser: async function () {
            try {
                let response = await ZOHO.CRM.CONFIG.getCurrentUser()
                console.log(response);
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
        cancelar: function () {
            ZOHO.CRM.UI.Popup.close()
                .then(function (data) {
                    console.log(data)
                })
        },
        updateBlueprint: async function () {
            let data = await ZOHO.CRM.BLUEPRINT.proceed();
            return data;
        },
        updateRecord: function () {

        },
        guardarDatos: function () {
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
                console.log(contactos);
                more_records = contactos.info.more_records;
                console.log(more_records);
                Array.prototype.push.apply(records, contactos.data);
                page = page + 1;
            } while (more_records);

            let filtered_records = records.map(({Full_Name,id}) => {
                return {"label":Full_Name,"code":id} ;
            } );
            console.log(filtered_records);
            this.options = filtered_records;
        }
        
    },
    created: function () {
        // this.onLoad();
        // this.initZSDK();
        // ZOHO.embeddedApp.init();
    },



})