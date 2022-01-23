Vue.component('chatDescriptionModule', {
    props: {
        module: '',
    },
    data: function () {
        return {
            chat:{},
            messages : [
                {msgId:1,type:"MESSAGE",initiatedBy:"VISITOR",message:"Hi,there, I am Atme Chatbot! how can I help?",isLiked:true,createdAt:1624043835831},
                {msgId:5,type:"IMAGE",initiatedBy:"VISITOR",url:"https://picsum.photos/200/300",isLiked:true,createdAt:1624043984884},
                {msgId:2,type:"MESSAGE",initiatedBy:"AGENT",message:"Hi,there, I am Atme Chatbot! how can I help?",isLiked:true,createdAt:1624043918400},
                {msgId:3,type:"MESSAGE",initiatedBy:"VISITOR",message:"Hi,there, I am Atme Chatbot! how can I help? Hi there, I am Atme Chatbot! how can I help?there, I am Atme Chatbot! how can I help?there, I am Atme Chatbot! how can I help?there, I am Atme Chatbot! how can I help?",isLiked:true,createdAt:1624043944807},
                {msgId:4,type:"MESSAGE",initiatedBy:"AGENT",message:"Hi,there, I am Atme Chatbot! how can I help? Hi there, I am Atme Chatbot! how can I help?there, I am Atme Chatbot! how can I help?there, I am Atme Chatbot! how can I help?there, I am Atme Chatbot! how can I help?",isLiked:true,createdAt:1624043984884},
                //{msgId:5,type:"IMAGE",initiatedBy:"VISITOR",url:"https://picsum.photos/200/300",isLiked:true,createdAt:1624043984884},
            ],
            isChatProfileClicked : false,
        }
    },
    created() {
        //will print props data
        console.log(this.module)
        this.$root.$on('showUserChat', (data) => {
            this.chat = data;
            this.isChatProfileClicked = true
        });

        this.$root.$on('clearChatScreen', (data) => {
            this.chat = {};
            this.isChatProfileClicked = false
        });
    },

    methods : {
        generateProfilePic(chatname) {
            return "https://kushtej.github.io/app/dataset/letter-icons/"+chatname[0].toUpperCase()+".png"
        },

        sendChat() {
            let sendText = $('#inputText').val().trim()
            if(sendText.length!==0) {
                this.messages.push(
                    {
                        msgId : this.messages.length + 1,
                        initiatedBy : "AGENT",
                        message : sendText,
                        createdAt : Date.now()
                    }
                )
                $('#inputText').val("")
                this.receiveChat(sendText)
            }
        },

        receiveChat(userText) {
            self = this
            setTimeout(function() {
                var visitorText = "You said "+ userText
                self.messages.push(
                    {
                        msgId : self.messages.length + 1,
                        initiatedBy : "VISITOR",
                        message : visitorText,
                        createdAt : Date.now()
                    }
                )
                const audio = new Audio("http://localhost/uidai/vue-chat-portal/app/media/notification.mp3");
                audio.play();
            }, 2000);
        }
    },
    getRandomColor() {
        // Note : To get random dark color
        var lum = -0.25;
        var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        var rgb = "#",
            c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    },

    template : 
    `
    <div>
        <div v-if="Object.keys(chat).length === 0 && isChatProfileClicked === false">
            <div class="text-center">
                <img src="https://Atmeecs.od1.Atme.com/layouts/v9/assets/images/Tasks_NoRecords.svg" 
                    class="rounded w-25 mt-5" alt="no-chat">
                <h3 class="text-center mt-2">Chats will come here</h3>
            </div>
        </div>
        <div v-else>
        <div class="card chat-screen">
            <div class="card-header p-2">
                <span v-if="typeof chat.chatImage !== 'undefined'">
                    <img :src="chat.chatImage" 
                        class="rounded-circle float-left chat-pic" alt="profile-pic">
                </span>
                <span v-else>
                    <img :src="generateProfilePic(chat.chatName)"
                        class="rounded-circle float-left chat-pic" alt="profile-pic">
                </span>
                <strong class="p-2">KushTej</strong><br>
                <small class="p-2"><i class="fas fa-circle text-success mr-1"></i>Active</small>
            </div>
            <div class="card-body">
                <div v-for="msg in messages" :key="msg.msgId">
                    <span v-if="msg.initiatedBy == 'VISITOR'">
                        <div class="float-left w-100" v-on:dblclick="msg.isLiked=true">
                            <div class="float-left" style="max-width: 50% !important;">
                                <div v-if="msg.type == 'IMAGE'">
                                    <img :src="msg.url" class="rounded float-left border p-2" alt="...">
                                </div>
                                <span v-else>
                                    <p class="border rounded p-2">{{ msg.message }}</p>
                                </span>
                                <span v-if="msg.isLiked === true">
                                    <i v-on:click="msg.isLiked=false" class="fas fa-heart float-right text-danger"></i>
                                </span>
                            </div>
                        </div>
                    </span>
                    <span v-if="msg.initiatedBy == 'AGENT'">
                        <div class="float-right w-100">
                            <div class="float-right" style="max-width: 50% !important;">
                                <div v-if="msg.type == 'IMAGE'">
                                    <img :src="msg.url" class="rounded float-right border p-2 mb-2 mt-2" alt="...">
                                </div>
                                <span v-else>
                                    <p class="text-left border rounded p-2 right-chat">{{ msg.message }}</p>
                                </span>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" id="inputText" autocomplete="off" placeholder="Type here" aria-label="inputText"
                v-on:keyup.enter="sendChat" aria-describedby="button-addon2">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" v-on:click="sendChat" id="submit"><i class="far fa-paper-plane"></i></button>
            </div>
        </div>
    </div>
    </div>
    `
})
//<small class="float-right">11hrs ago</small>
