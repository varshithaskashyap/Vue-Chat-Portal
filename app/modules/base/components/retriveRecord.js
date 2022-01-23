const baseRetrive = Vue.component("baseRetrive", {
    props: {
        module: '',
        //testing props not used
        chats:Boolean,
    },

    data: function () {
        return {
            allChats: [
                {
                    id:1,
                    chatName : "Visitor-01",
                    lastChat :"Hi",
                    chatImage: "https://kushtej.github.io/app/images/myprofile.png",
                    active:"11 hrs ago"
                },
                {
                    id:2,
                    chatName : "Visitor-02",
                    lastChat :"Thank you!",
                    chatImage: "https://media-exp1.licdn.com/dms/image/C5603AQHNAb_Xzx2Lkw/profile-displayphoto-shrink_100_100/0/1611406536775?e=1628726400&v=beta&t=sr8F6lnHphfieY3M4spaFfYAki5WCvv9QQRADr3IQ3c",
                    active:"1 day ago"
                },
                {
                    id:3,
                    chatName : "Hisitor-03",
                    lastChat :"Thank you!",
                    // chatImage: "https://media-exp1.licdn.com/dms/image/C5103AQGexDrIqfb7Qw/profile-displayphoto-shrink_100_100/0/1571797855191?e=1628726400&v=beta&t=krqc7Q0s-7eND4boBHIgiE6qOHb2A8cglDRQCjd2cXY",
                    active:"1 day ago"
                },
                {
                    id:4,
                    chatName : "Tejasvi",
                    lastChat :"Hi",
                    //chatImage: "https://media-exp1.licdn.com/dms/image/C5603AQEBRntHIagcdQ/profile-displayphoto-shrink_100_100/0/1608784856993?e=1628726400&v=beta&t=Q2rmg-EGHJrN2kM8U1FMxWzeoPaRli3FCL6Xbboiy38",
                    active:"11 hrs ago"
                },
                {
                    id:5,
                    chatName : "Visitor-02",
                    lastChat :"Thank you!",
                    chatImage: "https://media-exp1.licdn.com/dms/image/C5603AQFb_eTLD3b2-g/profile-displayphoto-shrink_100_100/0/1516241693047?e=1628726400&v=beta&t=oOQt7u3O11VRVEQ6cNDx9RrHj69N0bk9xRY0F5_GGfc",
                    active:"1 day ago"
                },
                {
                    id:6,
                    chatName : "Visitor-03",
                    lastChat :"Thank you!",
                    chatImage: "https://media-exp1.licdn.com/dms/image/C5603AQH8BMXdxjyb-Q/profile-displayphoto-shrink_100_100/0/1609229403689?e=1628726400&v=beta&t=PBa0j3rHD0dUmtTkKOhMIRLJ5td_0aMP4EXqSIZvVgo",
                    active:"1 day ago"
                },
                {
                    id:7,
                    chatName : "Visitor-01",
                    lastChat :"Hi",
                    chatImage: "https://media-exp1.licdn.com/dms/image/C5603AQHhb97CKFPwqQ/profile-displayphoto-shrink_100_100/0/1621859619177?e=1628726400&v=beta&t=gU64HhAL1bN3-NxIcPadDJ980Jm_fXXCF6HjQEEJc8I",
                    active:"11 hrs ago"
                },
                {
                    id:8,
                    chatName : "Visitor-02",
                    lastChat :"Thank you!",
                    // chatImage: "https://media-exp1.licdn.com/dms/image/C5603AQFb_eTLD3b2-g/profile-displayphoto-shrink_100_100/0/1516241693047?e=1628726400&v=beta&t=oOQt7u3O11VRVEQ6cNDx9RrHj69N0bk9xRY0F5_GGfc",
                    active:"1 day ago"
                },
                {
                    id:9,
                    chatName : "GVisitor-03",
                    lastChat :"hank you!",
                    // chatImage:"https://media-exp1.licdn.com/dms/image/C4D03AQGWRWekIPhUSA/profile-displayphoto-shrink_100_100/0/1601831692795?e=1628726400&v=beta&t=oswuna3gS4BAhQCmCXXWWfteSsRXSWQW75OBK7Imkh4",
                    active:"1 day ago"
                },
                {
                    id:10,
                    chatName : "Visitor-01",
                    lastChat :"Hi",
                    chatImage: "https://kushtej.github.io/app/images/myprofile.png",
                    active:"11 hrs ago"
                },
                {
                    id:11,
                    chatName : "Visitor-02",
                    lastChat :"Thank you!",
                    chatImage: "https://media-exp1.licdn.com/dms/image/C5603AQHZeTq-uFbeiA/profile-displayphoto-shrink_100_100/0/1517425750186?e=1628726400&v=beta&t=ASWpvie742LXRNl5cTjlX979MhceC3UDosmbTY9J5vI",
                    active:"1 day ago"
                },
                {
                    id:12,
                    chatName : "Visitor-03",
                    lastChat :"you!",
                    chatImage:"https://media-exp1.licdn.com/dms/image/C4D03AQGWRWekIPhUSA/profile-displayphoto-shrink_100_100/0/1601831692795?e=1628726400&v=beta&t=oswuna3gS4BAhQCmCXXWWfteSsRXSWQW75OBK7Imkh4",
                    active:"1 day ago"
                },
            ],
            chatActive : 0,
        }

    },

    created() {
        // //will print props data
        //console.log(this.chats)
    },

    methods: {
        activeChat(chat){
            this.chatActive = chat.id;
            this.$root.$emit('showUserChat',chat);
        },

        generateProfilePic(chatname) {
            return "https://kushtej.github.io/app/dataset/letter-icons/"+chatname[0].toUpperCase()+".png"
        }
    },

    template:
        `
        <div class="d-flex flex-column mt-2 chat-profile">
            <div v-for="chat in allChats" :key="chat.id">
                <div class="card" 
                    @click ="activeChat(chat)" 
                    :class="{ 'profile-active' : chatActive == chat.id }"
                >
                    <div class="">
                        <div class="profile-pic mt-2">
                            <span v-if="typeof chat.chatImage !== 'undefined'">
                                <img :src="chat.chatImage" 
                                    class="profile-pic float-left rounded-circle m-1" alt="profile-pic">
                            </span>
                            <span v-else>
                                <img :src="generateProfilePic(chat.chatName)" 
                                    class="profile-pic float-left rounded-circle m-1" alt="profile-pic">
                            </span>
                        </div>
                        <div class=" ml-2 float-right mr-3">
                            <span class="">
                                <h6>{{ chat.chatName }}</h6>
                                <span class="text-secondary "><h6>{{ chat.lastChat }}</h6>
                                    <h6 class="text-secondary" >{{ chat.active }}!</h6>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
})

// <div class="float-left rounded-circle m-1 text-light bg-primary text-center h1"
// style="height: 50px !important;width: 40% !important;">
// {{chat.chatName[0].toUpperCase()}}
// </div>