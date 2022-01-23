Vue.component("headers", {
    data: function () {
        return {
            module: 'chats',
            chats: true,
            agents: false,
            visitors: false,
        }
    },

    created() {
        //
    },

    methods: {
        moduleActive: function (event) {
            $('.modulesList button').removeClass('btn-primary');
            event.target.classList.toggle('btn-primary')
            this.module = event.target.name
            this.$root.$emit('clearChatScreen',true);
        },

        toggleDisplayMode: function (event) {
            $('body').addClass('bg-dark').removeClass('bg-light');
            $('.card').addClass('bg-dark')
            $('body').css('color', 'white');
        }
    },
    template: `
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="https://images.prismic.io/Atme-website/9591d4f5-67c9-4979-be96-3604114d4116_Atme+crm+logo.png?auto=compress,format&rect=7,0,341,91&w=100&h=30"
                    class="d-inline-block align-top" alt="">
            </a>            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
        <div class="container-fluid">
        <div class="row" v-bind:class="module" v-on:click.prevent>
            <div class="mt-2 bg-light col-sm-2 text-center">
                <div class="btn-group modulesList">
                    <button class="btn btn-primary" name="chats" 
                        v-on:click="moduleActive($event),
                                    chats = true, 
                                    agents = false,
                                    visitors = false">Chats
                    </button>
                    <button class="btn" name="agents"
                        v-on:click="moduleActive($event),
                                    chats = false, 
                                    agents = true,
                                    visitors = false">Agents
                    </button>
                    <button class="btn" name="visitors"
                        v-on:click="moduleActive($event),
                                    chats = false, 
                                    agents = false,
                                    visitors = true">Visitors
                    </button>
                </div>


                <div v-if="chats">
                    <chatsModule :module="module"></chatsModule>
                </div>
                <div v-if="agents">
                    <agentsModule :module="module"></agentsModule>
                </div>
                <div v-if="visitors">
                    <visitorsModule :module="module"></visitorsModule>
                </div>
            </div>

            <div class="col-sm-8 border-right border-left">
                <h2 class="text-center">{{this.module}}</h2>
                <chatDescriptionModule :module="module"></chatDescriptionModule>
            </div>

            <div class="col-sm-2 mt-2">
                <div class="btn-group">
                    <button type="button" class="btn btn-light">View Transcripts</button>
                    <button type="button" class="btn btn-light"><i class="far fa-circle text-success mr-1"></i>I'm Availble</button>
                </div>
            </div>
        </div>
        </div>
    </div>
    `,
})