
import pic1 from '../img/brooke-cagle-g1Kr4Ozfoac-unsplash (1).jpg';

const About = () => {

    return (
        <section className="bg-white dark:bg-gray-900 ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-700 dark:text-white">Welcome to Wisdom Bytes <br></br> Your Source of Inspiration!</h2>
                </div>
            </div>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-gray-50">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h3 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-700 md:text-5xl xl:text-4xl dark:text-white">Our Mission</h3>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">At Wisdom Bytes, we believe in the transformative power of education. Our mission is to inspire and motivate students to overcome challenges, pursue their passions, and achieve their academic goals. We are committed to creating a positive and empowering educational experience for every student.
</p>
                    
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={pic1} alt="mockup" />
                </div>
            </div>

            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-700 dark:text-white">Get Involved</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Are you passionate about education and empowerment? Join us on this journey! You can contribute by sharing your stories, participating in discussions, or submitting your favorite motivational quotes.
</p>
                </div>
            </div>


        </section>
    )
}

export default About