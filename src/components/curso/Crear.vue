<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Crear Curso</h4></div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Curso</label>
                                    <input type="text" class="form-control" v-model="curso.curso">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Créditos</label>
                                    <input type="text" class="form-control" v-model="curso.cantidadCreditos">
                                </div>
                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"crear-curso",
    data(){
        return {
            curso:{
                curso:"",
                cantidadCreditos:""
            }
        }
    },
    
    methods:{
        
        async crear(){
                console.log('dentro de crear'),
            await this.axios.post('/api/curso',this.curso)            
            .then(response=>{
                console.log('dentro de await'),
                this.$router.push({name:"mostrarCurso"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>