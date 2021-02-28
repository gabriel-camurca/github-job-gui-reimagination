import styles from "../styles/pages/HowItWorks.module.css"

export default function HowItWorks(){
    return(
        <div className={styles.outerContainer}>
            <h1>How GitHub Jobs Works</h1><br></br>
            <p>GitHub Jobs is a great place attract the best
                technical talent for your company's open
                software development positions. Here's how:</p>
            <div className={styles.cardContainer}>
                <section className={styles.stepsContainer}>
                    <h2>Step 1: Create and preview your listing</h2>
                    <div className={styles.individualStep}>
                        <img src="https://jobs.github.com/images/modules/faq/screenshot-editor.jpg"></img>
                        <p>See exactly how your listing will look before you publish live.
                            Before creating a listing, you must login with your GitHub
                            account and verify your email address.</p>
                    </div>
                </section>
                <section className={styles.stepsContainer}>
                    <h2>Step 2: Pay with a major credit card</h2>
                    <div className={styles.individualStep}>
                        <img src="step2_pay.png"></img>
                        <p>Invoicing available on request for bulk orders. Email
                            jobs@github.com for more info. Sorry, no recruitment
                            agencies.</p>
                    </div>
                </section>
                <section className={styles.stepsContainer}>
                    <h2>Step 3: Your listing goes live immediately</h2>
                    <div className={styles.individualStep}>
                        <img src="https://jobs.github.com/images/modules/faq/screenshot-listing.jpg"></img>
                        <p>Listings are live for 30 days. We’ll send you a receipt
                            and a link to change the listing.</p>
                    </div>
                </section>
                
                <div className={styles.dividerLine}>
                    <hr></hr>
                </div>
            </div>
            <div className={styles.questionsContainer}>
                <p>Questions? Submit a request via </p>
                <a href="https://support.github.com/contact?tags=jobs-support">contact form</a>
                <p> and we'll get back to you.</p>
            </div>
        </div>
    );
}