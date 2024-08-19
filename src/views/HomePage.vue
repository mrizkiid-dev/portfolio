<template>
    <Teleport v-if="isLoadingShow" to="#pop-up">
        <Loading />
    </Teleport>
    <section id="hello" class="">
        <p class="description desc-mobile">Hello, I am</p>
        <p class="name">Muhammad Rizki</p>
        <p class="description">"I create beautiful things on the web and mobile phone"</p>
        <div class="buttons">
            <Button :is-border="true" @on-tap="onTapGithub">
                <div class="button">
                    <Icon icon="mdi:github" class="icons"/>
                    <span>Github</span>
                </div>
            </Button>

            <Button :is-dark="true" @on-tap="onTapResume">
                <div class="button font-light">
                    <Icon icon="pepicons-pop:cv" class="icons icons-right"/>
                    <span>Resume</span>
                </div>
            </Button>
        </div>
    </section>

    <div v-if="!isMobile" class="running-text">
        <p class="marquee">
            <span>Software Dev  🧑‍💻  Software Dev  🧑‍💻  Software Dev  🧑‍💻 Software Dev  🧑‍💻 Software Dev  🧑‍💻&nbsp;</span>
        </p>
        <p class="marquee marquee2">
            <span>Software Dev  🧑‍💻  Software Dev  🧑‍💻  Software Dev  🧑‍💻 Software Dev  🧑‍💻 Software Dev  🧑‍💻&nbsp;</span>
        </p>
    </div>
    <div v-else class="running-text">
        <p class="marquee-mobile">
            <span>Software Dev  🧑‍💻  Software Dev  🧑‍💻  Software Dev  🧑‍💻 Software Dev  🧑‍💻 Software Dev  🧑‍💻&nbsp;</span>
        </p>
        <p class="marquee-mobile marquee2-mobile">
            <span>Software Dev  🧑‍💻  Software Dev  🧑‍💻  Software Dev  🧑‍💻 Software Dev  🧑‍💻 Software Dev  🧑‍💻&nbsp;</span>
        </p>
    </div>

    <section id="about-me">
        <div id="left">
            <h2>About me .</h2>
            <p class="paragraph paragraph-desktop">
                Hello, my name is Muhammad Rizki. I am a Software developer and a graphic designer.
                My passion for beautiful user interfaces led me to pursue a career in Software development.
                I have worked on several projects, both independently and as part in software house.
                This includes participating in daily stand-up meetings, sprints, discussions,
                and problem-solving within a software engineering context.
                Through these experiences, I have learned how the software development life cycle works
                and how design can enhance the marketability of an application.
                These experiences have deepened my love for my work as a Software developer.
            </p>
        </div>

        <div id="right" >
            <img src="@/assets/img/profile-img.webp" alt="profile-img">
        </div>

        <p class="paragraph paragraph-mobile">
                Hello, my name is Muhammad Rizki. I am a Software developer and a graphic designer.
                My passion for beautiful user interfaces led me to pursue a career in Software development.
                I have worked on several projects, both independently and as part in software house.
                This includes participating in daily stand-up meetings, sprints, discussions,
                and problem-solving within a software engineering context.
                Through these experiences, I have learned how the software development life cycle works
                and how design can enhance the marketability of an application.
                These experiences have deepened my love for my work as a Software developer.
            </p>
    </section>

    <section id="skills">
        <h2>" Technologies that I'm confident with "</h2>
        <div class="container-grid">
            <div class="content-grid">
                <div class="content">
                    <Icon icon="logos:flutter" class="icon"/>
                    <p>Flutter</p>
                </div>
                <div class="content">
                    <Icon icon="logos:vue" class="icon"/>
                    <p>Vue</p>
                </div>
                <div class="content">
                    <Icon icon="logos:nuxt-icon" class="icon"/>
                    <p>Nuxt</p>
                </div>
                <div class="content">
                    <Icon icon="logos:laravel" class="icon"/>
                    <p>Laravel</p>
                </div>
                <div class="content">
                    <Icon icon="devicon:tailwindcss" class="icon"/>
                    <p>Tailwind</p>
                </div>
                <div class="content">
                    <Icon icon="devicon:typescript" class="icon"/>
                    <p>Typescript</p>
                </div>
                <div class="content">
                    <Icon icon="devicon:postman" class="icon"/>
                    <p>Postman</p>
                </div>
                <div class="content">
                    <Icon icon="devicon:git" class="icon"/>
                    <p>Git</p>
                </div>
                <div class="content">
                    <Icon icon="devicon:linux" class="icon"/>
                    <p>Linux</p>
                </div>
                <div class="content">
                    <Icon icon="logos:figma" class="icon"/>
                    <p>Figma</p>
                </div>
                <!-- <div class="content">
                    <Icon icon="devicon:photoshop" class="icon"/>
                    <p>Photoshop</p>
                </div> -->
            </div>
        </div>
    </section>

    <section id="projects">
        <Teleport v-if="isCardTodoPopUp" to="#pop-up">
            <ProjectPopUp title="CardTodo" @on-tap="onClosePopUp">
                <DetailProjectPopUp>
                    <p>
                        I learn More about flutter and dart at how passing by address and value work espessialy in list.
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        I learn how widget and widget tree in flutter
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        I learn more about bloc and inherited widget, how stream works and behaviour.
                        I learn that how important inversion of control rather than send instance class by class on class tree.
                        I use get it as inversion of control
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        I implemented clean architecture after finished intensive pairing programy by refactory.
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Learn more about figma and design best practice.
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Learn and practice with version control system GIT and Github.
                    </p>
                </DetailProjectPopUp>
                <div class="images">
                    <img src="@/assets/img/card_todo/a.webp" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/card_todo/1.webp" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/card_todo/2.webp" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/card_todo/3.webp" :height="widthAndHeight" alt="">
                </div>
                <div class="button-project">
                    <Button :is-dark="true" @click="onTapSourceCodeCardTodo">
                        <span>Source Code</span>
                    </Button>

                    <Button :is-dark="true" @click="onTapFigmaCardTodo">
                        <span>Figma Design</span>
                    </Button>
                </div>
            </ProjectPopUp>
        </Teleport>

        <Teleport v-if="isRefactoryPopUp" to="#pop-up">
            <ProjectPopUp title="Refactory" @on-tap="onClosePopUp">
                <DetailProjectPopUp>
                    <p>
                        I learn more about team work with real case study.
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Contribute in sprint and daily stand up meeting, 
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Collaborating with cross-functional teams including designers, product
                        managers, and other developers to create high-quality products
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Build interactive and responsive ui
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Working on a several project as Software with vue js and react js
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Working on a several project as mobile developer with flutter <br>
                        - i help several team to make mobile app with flutter <br>
                        - i join team to make mobile app for hanoman, hanoman is app for internal company to track sales and stock outlet.<br>
                        - contribute with team that make sev-2 with flutter, sev-2 is internal app for project management in refactory.
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Help to contribute team on project alladin mall <br>
                        - in this project i help team to make android apps with kotlin <br>
                        - i also help construct ui on seller website with react js for alladin mall <br>
                        - I also help to fix bug in edge function on back-end with golang. 
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Create End Point using code igniter <br>
                        In project HANOMAN i also help team to construct ui also make an api with codeigniter 3
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        On project SEV-2(internal software) team decide to migrate from phabricator PHP to supabase for project managament. Is it because supabase use technology called PostgREST and for custom complex manipulation query we need to make RPC. I help with team back-end to make posrgre function for supabase RPC.
                    </p>
                </DetailProjectPopUp>
                <!-- <div class="images">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="isMobile ? '75px' : '150px'" :height="isMobile ? '75px' : '150px'" alt="">
                </div> -->
                
            </ProjectPopUp>
        </Teleport>

        <Teleport v-if="isProject88PopUp" to="#pop-up">
            <ProjectPopUp title="Project 88" @on-tap="onClosePopUp">
                <DetailProjectPopUp>
                    <p>
                        This project is to make a e-commerce for my personal project. E-commerce website need framework that support server side rendering, therefore I decide to use nuxt js.
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        To improve speed of development, i use TailwindCss for css framework.
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        In this project i use supabase for back-end. I learn more with manipulation supabase query and manipulation PostgreSQL query for supabase rpc.
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Before developing website and back-end. First of all i need to make design. I choose Figma to make big picture of how my project will look like and what a feature i should make.
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        I use Typescript rather than full of Javascript in my nuxt program for type safety.
                    </p>
                </DetailProjectPopUp>
                <!-- <div class="images">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                </div> -->
                <div class="button-project">
                    <Button :is-dark="true" @click="onTapSourceCodeProject88">
                        <span>Source Code</span>
                    </Button>

                    <Button :is-dark="true" @click="onTapFigmaProject88">
                        <span>Figma Design</span>
                    </Button>

                    <Button :is-dark="true" @click="onTapLiveProject88">
                        <span>Live Website</span>
                    </Button>
                </div>
                
            </ProjectPopUp>
        </Teleport>

        <h2>"What i have done so far"</h2>
        <div class="container-grid">
            <div class="content-grid">
                <div class="content" @click="onCardTodoPopUp">
                    <div class="img-container">
                        <img src="@/assets/img/card_todo/a.webp" width="210px" height="210px" alt="profile-img" >
                    </div>
                    <div>
                        <h3 class="description-project">CardTodo</h3>
                        <p>CardTodo is a self-project that i do for learning mobile developer (flutter) more</p>
                        <div class="skills">
                            <div class="skill flutter">Flutter</div>
                            <div class="skill flutter">Dart</div>
                            <div class="skill flutter">FLutter-Bloc</div>
                            <div class="skill flutter">Hive</div>
                            <div class="skill figma">Figma</div>
                        </div>
                    </div>
                </div>
                <div class="content" @click="onRefactoryPopUp">
                    <div class="img-container">
                        <img src="@/assets/img/logo-refactory.webp" width="210px" height="210px" alt="profile-img" >
                    </div>
                    <div>
                        <h3 class="description-project">Refactory</h3>
                        <p>I join Intensive Pairing (IP) at Refactory start on may. In this program i learn and do internship as software engineer junior.</p>
                        <div class="skills">
                            <div class="skill flutter">Flutter</div>
                            <div class="skill android-studio">Kotlin</div>
                            <div class="skill vue-js">Nuxt JS</div>
                            <div class="skill react">React</div>
                            <div class="skill supabase">Supabase</div>
                            <div class="skill postgresql">PostgreSQL</div>
                            <div class="skill code-igniter">CodeIgniter3</div>
                        </div>
                    </div>
                </div>
                <div class="content" @click="onProject88PopUp">
                    <div class="img-container">
                        <img src="@/assets/img/logo-project88.webp" width="210px" height="210px" alt="profile-img" >
                    </div>
                    <div>
                        <h3 class="description-project">Project 88</h3>
                        <p>After Intensive Pairing Program. i realise my mobile developer skill doesn't enough. I need to deep learn Software</p>
                        <div class="skills">
                            <div class="skill vue-js">Nuxt JS</div>
                            <div class="skill supabase">Supabase</div>
                            <div class="skill tailwind">Tailwind Css</div>
                            <div class="skill postgresql">PostgreSQL</div>
                            <div class="skill code-igniter">Laravel</div>
                            <div class="skill flutter">Flutter</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  

    <!-- For future feature -->
    <!-- <section id="me-before">
        <button class="bg-gradient" @click="onTapGallery">
            <span>see what i was before</span>
            <span class="icon-arrow">
                <Icon icon="el:arrow-right" :width="widthIcon" :height="widthIcon"/>
            </span>
        </button>
    </section> -->

    <!-- <div class="gradient-transition" /> -->
    <!-- <svg v-show="!isMobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#323232" fill-opacity="1" d="M0,192L20,186.7C40,181,80,171,120,154.7C160,139,200,117,240,138.7C280,160,320,224,360,218.7C400,213,440,139,480,128C520,117,560,171,600,170.7C640,171,680,117,720,96C760,75,800,85,840,101.3C880,117,920,139,960,160C1000,181,1040,203,1080,192C1120,181,1160,139,1200,144C1240,149,1280,203,1320,208C1360,213,1400,171,1420,149.3L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
    <svg v-show="isMobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#323232" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,234.7C640,213,800,139,960,117.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> -->
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#323232" fill-opacity="1" d="M0,32L40,32C80,32,160,32,240,53.3C320,75,400,117,480,133.3C560,149,640,139,720,122.7C800,107,880,85,960,90.7C1040,96,1120,128,1200,128C1280,128,1360,96,1400,80L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

    <section id="contact">
        <h2>" 👋 let's get connected! "</h2>
        <p>“Software not only needs to meet the criteria but also has to be visually good. I believe that my ability to design and implement user-friendly interfaces will enhance your product's user experience, ensuring that your applications not only function seamlessly but also look beautiful.”</p>
        <div class="button-contact">
            <button @click="onTapWhatsapp">
                <div class="button bg-whatsapp font-light">
                    <Icon icon="logos:whatsapp-icon" class="icons"/>
                    <span class="text-whatsapp">chat me</span>
                </div>
            </button>

            <div class="email-button">
                <span v-show="isCopyShow && !isMobile" class="notification-copy md:hidden">email copied</span>
                <button @click="onTapEmail">
                    <div class="button font-light">
                        <Icon icon="ic:outline-email" class="icons"/>
                        <span>mail me</span>
                    </div>
                </button>
            </div>
        </div>
    </section>

    <footer>
        <p>PORTFOLIO CREATED WITH VUE JS - 2024</p>
    </footer>

</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
import Loading from '@/components/Loading.vue'
import ProjectPopUp from '@/components/ProjectPopUp.vue'
import DetailProjectPopUp from '@/components/project-pop-up/DetailProjectPopUp.vue'
import { useScreen } from '@/composables/useScreen'
import { linkNewTab } from '@/utils/helper'
import { Icon } from '@iconify/vue'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoadingShow = ref<boolean>(true)
onMounted(() => {
    isLoadingShow.value = true
    setTimeout(() => {
        isLoadingShow.value = false
    }, 5000);
})

const onTapGithub = () => {
    linkNewTab('https://github.com/mrizkiid-dev')
}

const onTapResume = () => {
    linkNewTab('https://drive.google.com/file/d/1PmIK6uiuJ_LFtNZrQLY54Z-x3nx3MQX9/view?usp=sharing')
}

const onTapWhatsapp = () => {
    linkNewTab('https://wa.me/6282119777614')
}

const isCopyShow = ref<boolean>(false)
let timeId: number | null = null
const onTapEmail = async() => {
    navigator.clipboard.writeText('muhammad.rizki.surel@gmail.com').then(() => {
            isCopyShow.value = true
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
        
    if (timeId) {
        window.clearTimeout(timeId);
    }

    timeId = setTimeout(() => {
        isCopyShow.value = false
        timeId = null
    }, 2000)
    
    if (isMobile) {
        window.open("mailto:muhammad.rizki.surel@gmail.com","_self")
    }
}

const isCardTodoPopUp = ref<boolean>(false)
const isRefactoryPopUp = ref<boolean>(false)
const isProject88PopUp = ref<boolean>(false)

const onClosePopUp = () => {
    isCardTodoPopUp.value = false
    isRefactoryPopUp.value = false
    isProject88PopUp.value = false
}

const onCardTodoPopUp = () => {
    isCardTodoPopUp.value = true
}

const onTapSourceCodeCardTodo = () => {
    linkNewTab('https://github.com/mrizkiid-dev/card_todo')
}

const onTapFigmaCardTodo = () => {
    linkNewTab('https://www.figma.com/design/l5eh7u9zxyoMd8SsHU1K93/Card-Todo?node-id=0-1&t=u3hOTArZ0XQm2ycJ-1')
}

const onTapSourceCodeProject88 = () => {
    linkNewTab('https://github.com/mrizkiid-dev/project-88/tree/staging')
}

const onTapFigmaProject88 = () => {
    linkNewTab('https://www.figma.com/design/wUzRqivoYlXvCxnsNlca7M/belajar?node-id=7-2&t=vbZMRdzFzUUxl7AF-0')
}

const onTapLiveProject88 = () => {
    linkNewTab('https://project88.rizkidev.my.id/')
}

const onRefactoryPopUp = () => {
    isRefactoryPopUp.value = true
}

const onProject88PopUp = () => {
    isProject88PopUp.value = true
}

const { isMobile } = useScreen()
const widthAndHeight = computed(() => {
    return isMobile.value ? '120px' : '180px'
})

// section me-about
const widthIcon = computed(() => {
    return isMobile.value ? '20px' : '40px'
})

const onTapGallery = () => {
    router.push({ path : "/gallery" })
}

</script>

<style scoped>
@import '@/assets/homepage/hello-style.css';
@import '@/assets/homepage/about-style.css';
@import '@/assets/homepage/skills-style.css';
@import '@/assets/homepage/projects-style.css';
@import '@/assets/homepage/contact-style.css';
@import '@/assets/homepage/running-text.css';
@import '@/assets/homepage/me-before.css';

footer {
    background-color: #ffc567;
    padding: 13px 0;
    color: var(--color-text-dark);
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.1em;
}

.gradient-transition {
    height: 50px;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 100%);
}

.wave-container {  
  height: 40vh;
  background-color: #f9f5f2;
  position: relative;
}

.wave-container::before {   
  content: "";
  width: 100%;
  height: 168px;
  position: absolute;
  bottom: -0.3%;
  left: 0;
  background-size: auto;
  background-repeat: repeat no-repeat;
  background-position: 30vw bottom;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 22L33 19C82 13 133 14 200 29C267 44 333 67 400 70C467 74 533 59 600 40C667 22 733 0 800 0C867 0 933 22 1000 29C1067 37 1133 29 1167 26L1200 22V134H1167C1133 134 1067 134 1000 134C933 134 867 134 800 134C733 134 667 134 600 134C533 134 467 134 400 134C333 134 267 134 200 134C133 134 67 134 33 134H0V22.332Z' fill='%23fceee3'/></svg>");
}

@media(max-width:850px) {
  .wave-container::before {    
    height: 84px
  }  
}


</style>