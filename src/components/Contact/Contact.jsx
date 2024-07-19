import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <div className="wrapper">
                <div className="contact-form">
                    <div className="top">
                        <h1 className="title">
                            <span className="gradient-text">Join Us!</span>
                        </h1>
                        <p className="muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quod ut hic quis aut cumque minima unde recusandae pariatur
                            soluta ab.
                        </p>
                    </div>

                    <div className="middle">
                        <div className="flex row">
                            <input type="text" placeholder="First name" className="control" name="firstname" />
                            <input type="text" placeholder="Last name" className="control" name="lastname" />
                        </div>

                        <div className="flex row">
                            <input type="email" placeholder="Email address" className="control" name="email" />
                            <input type="tel" placeholder="Phone" className="control" name="phone" />
                        </div>

                        <textarea name="message" placeholder="Your message" cols={30} rows={10} className="control">
                        </textarea>
                    </div>

                    <div className="flex-center bottom">
                        <button className="btn primary">
                            Send Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
