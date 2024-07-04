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
        <h2>"What i have done so far"</h2>
        <div class="container-grid">
            <div class="content-grid">
                <div class="content">
                    <div class="img-container">
                        <img src="@/assets/img/profile-img.webp" width="210px" height="210px" alt="profile-img" >
                    </div>
                    <div>
                        <h3 class="description-project">Card Todo</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vitae ea possimus doloremque dicta ullam laboriosam distinctio nemo earum quod, tenetur sed ducimus amet quaerat fugiat ipsam? Est, fugit eos?</p>
                    </div>
                </div>
                <div class="content">
                    <div class="img-container">
                        <img src="@/assets/img/profile-img.webp" width="210px" height="210px" alt="profile-img" >
                    </div>
                    <div>
                        <h3 class="description-project">Refactory</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vitae ea possimus doloremque dicta ullam laboriosam distinctio nemo earum quod, tenetur sed ducimus amet quaerat fugiat ipsam? Est, fugit eos?</p>
                    </div>
                </div>
                <div class="content">
                    <div class="img-container">
                        <img src="@/assets/img/profile-img.webp" width="210px" height="210px" alt="profile-img" >
                    </div>
                    <div>
                        <h3 class="description-project">Project 88</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vitae ea possimus doloremque dicta ullam laboriosam distinctio nemo earum quod, tenetur sed ducimus amet quaerat fugiat ipsam? Est, fugit eos?</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <p>“Application not only needs to meet the criteria but also has to be visually good. I believe that my ability to design and implement user-friendly interfaces will enhance your product's user experience, ensuring that your applications not only function seamlessly but also look beautiful.”</p>
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
        <p>PORTOFOLIO - 2024</p>
    </footer>

</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
import { Icon } from '@iconify/vue';

const onTap = () => {
    console.log('ontap');
}

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