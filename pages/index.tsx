import Head from "next/head";
import ReactTypingEffect from "react-typing-effect";

export default function Index() {
    return (
        <>
            <Head>
                <title>Jahazel's Website</title>
                <meta
                    name="description"
                    content="Welcome to my porfolio website."
                />
            </Head>
            <div id="container">
                <nav id="nav-bar">
                    <span>Jahazel Sanchez</span>
                </nav>
                <div id="top-section">
                    <img
                        id="profile-pic"
                        src="/profile.png"
                        alt="profile-picture"
                    />
                    <h1>
                        Hi, nice to meet you!
                        <br /> I'm{" "}
                        <ReactTypingEffect
                            speed={100}
                            eraseSpeed={50}
                            text={["Jahazel."]}
                        />
                    </h1>
                </div>
                <div id="info-section">
                    <p>
                        Im a Computer Science Major at Pomona College interested
                        in <b>web-development</b>.
                    </p>
                    <p>
                        I took <b>CS51: Intro to Computer Science</b> during my
                        freshman year of college. This course provides an
                        introduction to the field of computer science using the
                        Python programming language.
                    </p>
                    <p>
                        Im currently taking
                        <b> CS54: Discrete Math and Functional Programming. </b>
                        This course is a combination of functional programming
                        and formal proof while exploring a number of topics in
                        computer science.
                    </p>
                    <hr />
                    <p>
                        Some apps that I've built. <b>Soon to be added!</b>
                    </p>
                </div>
            </div>
        </>
    );
}
