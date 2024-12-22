<template>
    <div class="section xl:p-[50px] lg:p-[50px] p-[25px] skills-content">
        <div class="xl:text-left lg:text-left text-center">
            <div
                class=" text-white font-bold xl:mb-[40px] lg:mb-[40px] uppercase inline-block xl:text-[35px] lg:text-[25px] text-[25px] border-b-2 border-white ">
                Contact</div>
        </div>
        <!-- <div class="leading-[40px] xl:text-[18px] lg:text-[10px] text-[10px] mb-1 tracking-wider text-white ">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </div> -->
        <div class="xl:flex lg:flex justify-center">
            <div class="lg:w-[50%] xl:w-[50%] h-[100%] text-center py-10 contact_right">
                <div class="bg_contact_img h-[50%] py-10 mb-[50px] rounded-lg">
                    <div class="pb-[50px] xl:text-[30px] font-bold ">
                        Contact Info
                    </div>
                    <div class="xl:text-[22px] lg:text-[20px] text-[17px] flex flex-col gap-y-5">
                        <p><strong>Address:</strong> Ho Chi Minh City, Vietnam</p>
                        <p>
                            <strong>Email:</strong> tukien159@gmail.com
                        </p>
                        <p><strong>Website:</strong> <a href="https://myport-az9q.vercel.app">KinPortfolio.com</a></p>
                    </div>
                </div>
                <div class="h-[50%] xl:block lg:block hidden">
                    <img class="h-[380px] w-[800px] object-cover rounded-lg"
                        src="https://i.pinimg.com/736x/2d/1d/e2/2d1de256c19a0f4a9b78fcddaaa46679.jpg" alt="">
                </div>

            </div>
            <div class="lg:w-[50%] xl:w-[50%] h-[100%] xl:ml-10 lg:ml-10 contact_left">
                <div class="mb-[40px] py-2 xl:text-[30px] font-bold text-center bg-teal-500 rounded-lg">
                    Contact Form
                </div>
                <div class="xl:text-[22px] lg:text-[20px] text-[17px]  flex flex-col gap-y-8">
                    <input class="p-5 w-full text-black" placeholder="Name:" type="text">
                    <input class="p-5 w-full text-black" placeholder="Email:" type="text">
                    <input class="p-5 w-full text-black" placeholder="Subject:" type="text">
                    <textarea class="p-5 w-full text-black max-h-full h-[400px]" placeholder="Message:"
                        type="text"></textarea>
                    <div class="flex justify-center">
                        <button class="px-10 py-4 bg-teal-500 font-bold xl:inline lg:inline w-full rounded-md">Send
                            it</button>
                    </div>
                </div>
            </div>
            <div class="h-[50%] mt-10 xl:hidden lg:hidden block contact_img_bottom">
                <img class="h-[270px] w-[800px] object-cover rounded-lg"
                    src="https://i.pinimg.com/736x/2d/1d/e2/2d1de256c19a0f4a9b78fcddaaa46679.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Placeholder logic for form submission
            console.log('Form submitted:', this.form);
            alert('Thank you for your message!');
            // Reset the form
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        }
    }
};
</script>

<style scoped>
.bg_contact_img {
    background-image: url("https://i.pinimg.com/736x/6c/8b/72/6c8b72f7f0612ba94ef45b241a7aae4d.jpg");
}

.contact_right {
    animation: lefttoright 2s ease-in-out;
}

.contact_left {
    animation: righttoleft 2s ease-in-out;
}

.contact_img_bottom {
    animation: downtoup 2s ease-in-out;
}

@keyframes lefttoright {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }


    100% {
        opacity: 1;
        transform: translateX(0px);
    }

}

@keyframes downtoup {
    0% {
        opacity: 0;
        transform: translateY(200px);
    }


    100% {
        opacity: 1;
        transform: translateY(0);
    }

}

@keyframes righttoleft {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }


    100% {
        opacity: 1;
        transform: translateX(0px);
    }
}
</style>
