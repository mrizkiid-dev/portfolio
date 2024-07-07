<template>
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

    <section id="about-me">
        <div id="left">
            <h2>About me .</h2>
            <p class="paragraph paragraph-desktop">
                Hello, my name is Muhammad Rizki. I am a front-end developer and a graphic designer.
                My passion for beautiful user interfaces led me to pursue a career in front-end development.
                I have worked on several projects, both independently and as part in software house.
                This includes participating in daily stand-up meetings, sprints, discussions,
                and problem-solving within a software engineering context.
                Through these experiences, I have learned how the software development life cycle works
                and how design can enhance the marketability of an application.
                These experiences have deepened my love for my work as a front-end developer.
            </p>
        </div>

        <div id="right">
            <img src="@/assets/img/profile-img.webp" alt="profile-img">
        </div>

        <p class="paragraph paragraph-mobile">
                Hello, my name is Muhammad Rizki. I am a front-end developer and a graphic designer.
                My passion for beautiful user interfaces led me to pursue a career in front-end development.
                I have worked on several projects, both independently and as part in software house.
                This includes participating in daily stand-up meetings, sprints, discussions,
                and problem-solving within a software engineering context.
                Through these experiences, I have learned how the software development life cycle works
                and how design can enhance the marketability of an application.
                These experiences have deepened my love for my work as a front-end developer.
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
                <div class="content">
                    <Icon icon="devicon:photoshop" class="icon"/>
                    <p>Photoshop</p>
                </div>
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
                        Working on a several project as front-end with vue js and react js
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
                        <p>After Intensive Pairing Program. i realise my mobile developer skill doesn't enough. I need to deep learn front-end stack</p>
                        <div class="skills">
                            <div class="skill vue-js">Nuxt JS</div>
                            <div class="skill supabase">Supabase</div>
                            <div class="skill tailwind">Tailwind Css</div>
                            <div class="skill postgresql">PostgreSQL</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <p>“Software not only needs to meet the criteria but also has to be visually good. I believe that my ability to design and implement user-friendly interfaces will enhance your product's user experience, ensuring that your applications not only function seamlessly but also look beautiful.”</p>
        <div class="button-contact">
            <Button @on-tap="onTapWhatsapp">
                <div class="button bg-whatsapp font-light">
                    <Icon icon="logos:whatsapp-icon" class="icons"/>
                    <span>chat me</span>
                </div>
            </Button>

            <div class="email-button">
                <span v-show="isCopyShow" class="notification-copy">email copy to clipboard</span>
                <Button :is-dark="true" @on-tap="onTapEmail">
                    <div class="button font-light">
                        <Icon icon="ic:outline-email" class="icons"/>
                        <span>mail me</span>
                    </div>
                </Button>
            </div>
        </div>
    </section>

    <footer>
        <p>PORTFOLIO CREATED WITH VUE JS - 2024</p>
    </footer>

</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
import ProjectPopUp from '@/components/ProjectPopUp.vue'
import DetailProjectPopUp from '@/components/project-pop-up/DetailProjectPopUp.vue'
import { useScreen } from '@/composables/useScreen'
import { linkNewTab } from '@/utils/helper'
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'

const onTapGithub = () => {
    linkNewTab('https://github.com/mrizkiid-dev')
}

const onTapResume = () => {
    linkNewTab('https://drive.google.com/file/d/1PbIdMexP9ebSkbITisCjsBqlW9qHSArH/view?usp=sharing')
}

const onTapWhatsapp = () => {
    linkNewTab('https://wa.me/6282119777614')
}

const isCopyShow = ref<boolean>(false)
let timeId: number | null = null
const onTapEmail = async() => {
    navigator.clipboard.writeText('muhammad.rizki.surel.dev@gmail.com').then(() => {
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

</script>

<style scoped>
@import '@/assets/homepage/hello-style.css';
@import '@/assets/homepage/about-style.css';
@import '@/assets/homepage/skills-style.css';
@import '@/assets/homepage/projects-style.css';
@import '@/assets/homepage/contact-style.css';

footer {
    background-color: var(--color-bg-dark);
    padding: 13px 0;
    color: var(--color-text-light);
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.1em;
}

</style>