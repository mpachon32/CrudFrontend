<template>
    <div class="row">
        <div class="col-lg-12 mb-4">
            <router-link :to='{name:"crearCurso"}' class="btn btn-success"><i class="fas fa-plus-circle"></i></router-link>
        </div>

         <div class="col-12">             
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="bg-primary text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Curso</th>
                                    <th>Créditos</th>
                                    <th>Profesor</th>
                                    <th>Pre-requisito</th>
                                    <th>Trabajo autónomo</th>
                                    <th>Trabajo dirigido</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="curso in cursos" :key="curso.id">
                                    <td>{{ curso.id }}</td>
                                    <td>{{ curso.cantidadCreditos }}</td>
                                    <td>{{ curso.profesor }}</td>
                                    <td>{{ curso.prerrequisito }}</td>
                                    <td>{{ curso.horasAutonomo }}</td>
                                    <td>{{ curso.horasDirigido }}</td>
                                    <td>
                                        <!-- llamamos al componente para Editar     -->
                                        <router-link :to='{name:"editarCurso",params:{id:curso.id}}' class="btn btn-info"><i class="fas fa-edit"></i></router-link>
                                        <a type="button" @click="borrarCurso(curso.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>                          
        </div>

    </div>

    

</template>
<script>
export default {
    name:"cursos",
    data(){
        return {
            cursos:[]
        }
    },
    mounted(){
        this.mostrarCursos()
    },
    methods:{
        async mostrarCursos(){
            await this.axios.get('/api/curso').then(response=>{
                this.cursos = response.data
            }).catch(error=>{
                console.log(error)
                this.cursos = []
            })
        },
        borrarCurso(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/curso/${id}`).then(response=>{
                    this.mostrarCursos()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>