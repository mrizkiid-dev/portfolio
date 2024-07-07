<template>
    <section id="hello" class="">
        <p class="description desc-mobile">Hello, I am</p>
        <p class="name">Muhammad Rizki</p>
        <p class="description">"I create beautiful things on the web and mobile phone"</p>
        <div class="buttons">
            <Button :is-border="true" @on-tap="onTap">
                <div class="button">
                    <Icon icon="mdi:github" class="icons"/>
                    <span>Github</span>
                </div>
            </Button>

            <Button :is-dark="true" @on-tap="onTap">
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <div class="images">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="isMobile ? '75px' : '150px'" :height="isMobile ? '75px' : '150px'" alt="">
                </div>
            </ProjectPopUp>
        </Teleport>

        <Teleport v-if="isRefactoryPopUp" to="#pop-up">
            <ProjectPopUp title="Refactory" @on-tap="onClosePopUp">
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <div class="images">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="isMobile ? '75px' : '150px'" :height="isMobile ? '75px' : '150px'" alt="">
                </div>
            </ProjectPopUp>
        </Teleport>

        <Teleport v-if="isProject88PopUp" to="#pop-up">
            <ProjectPopUp title="Project 88" @on-tap="onClosePopUp">
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <DetailProjectPopUp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo. Aut provident aliquid voluptatibus, iusto praesentium maxime voluptate assumenda deserunt reprehenderit soluta eum accusantium esse qui sit quasi ipsa obcaecati!
                    </p>
                </DetailProjectPopUp>
                <div class="images">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="widthAndHeight" :height="widthAndHeight" alt="">
                    <img src="@/assets/img/profile-img.webp" :width="isMobile ? '75px' : '150px'" :height="isMobile ? '75px' : '150px'" alt="">
                </div>
            </ProjectPopUp>
        </Teleport>

        <h2>"What i have done so far"</h2>
        <div class="container-grid">
            <div class="content-grid">
                <div class="content" @click="onCardTodoPopUp">
                    <div class="img-container">
                        <img src="@/assets/img/profile-img.webp" width="210px" height="210px" alt="profile-img" >
                    </div>
                    <div>
                        <h3 class="description-project">Card Todo</h3>
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
                        <img src="@/assets/img/profile-img.webp" width="210px" height="210px" alt="profile-img" >
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
                        <img src="@/assets/img/profile-img.webp" width="210px" height="210px" alt="profile-img" >
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
            <Button @on-tap="onTap">
                <div class="button bg-whatsapp font-light">
                    <Icon icon="logos:whatsapp-icon" class="icons"/>
                    <span>chat me</span>
                </div>
            </Button>

            <Button :is-dark="true" @on-tap="onTap">
                <div class="button font-light">
                    <Icon icon="ic:outline-email" class="icons"/>
                    <span>mail me</span>
                </div>
            </Button>
        </div>
    </section>

    <footer>
        <p>PORTFOLIO - 2024</p>
    </footer>

</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
import ProjectPopUp from '@/components/ProjectPopUp.vue'
import DetailProjectPopUp from '@/components/project-pop-up/DetailProjectPopUp.vue'
import { useScreen } from '@/composables/useScreen'
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'

const onTap = () => {
    // isCardTodoPopUp.value = true
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

const onRefactoryPopUp = () => {
    isRefactoryPopUp.value = true
}

const onProject88PopUp = () => {
    isProject88PopUp.value = true
}

const { isMobile } = useScreen()
const widthAndHeight = computed(() => {
    return isMobile.value ? '75px' : '150px'
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

.images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 40px;
}

.images img {
    border-radius: 10px;
}

</style>