import styles from "../styles/pages/DocumentationAPI.module.css"

export default function DocumentationAPI(){
    return(
        <div className={styles.outerContainer}>
            <h1>The GitHub Jobs API</h1><br></br>
            <p>The GitHub Jobs API allows you to search, and view jobs with JSON over HTTP. </p>
            <p>To get the JSON representation of any search result or job listing, append .json
                to the URL you'd use on the HTML GitHub Jobs site.  </p>
            <p>For example, when searching for Python jobs near New York on the site I am taken
                to this url:  </p>
            <a href="https://jobs.github.com/positions?description=python&location=new+york">
                https://jobs.github.com/positions?description=python&location=new+york
            </a>
            <p>To get the JSON representation of those jobs I just use positions.json:  </p>
            <a href="https://jobs.github.com/positions.json?description=python&location=new+york">
                https://jobs.github.com/positions.json?description=python&location=new+york
            </a>
            <div className={styles.cardContainer}>
                <section className={styles.stepsContainer}>
                    <h2>Pagination</h2>
                    <div className={styles.individualStep}>
                        <p>The API also supports pagination. /positions.json, for example,
                            will only return 50 positions at a time. You can paginate
                            results by adding a page parameter to your queries.</p>
                        <p>Pagination starts by default at 0.</p>
                        <strong>Examples</strong>
                        <ul>
                            <li>
                                <a href="https://jobs.github.com/positions.json?description=ruby&page=1">
                                https://jobs.github.com/positions.json?description=ruby&page=1
                                </a>
                            </li>
                            <li>
                                <a href="https://jobs.github.com/positions.json?page=1&search=code">
                                https://jobs.github.com/positions.json?page=1&search=code
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={styles.stepsContainer}>
                <h2>GET /positions.json</h2>
                    <div className={styles.individualStep}>
                        <p>Search for jobs by term, location, full time vs part time, or
                            any combination of the three. All parameters are optional.</p>
                        
                        <strong>Parameters</strong>
                        <ul>
                            <li>
                                <p className={styles.highlightedText}>description</p>
                                <p className={styles.standardText}>— A search term, such as "ruby" or "java". This
                                    parameter is aliased to search.</p>
                            </li>
                            <li>
                                <p className={styles.highlightedText}>location</p>
                                <p className={styles.standardText}>— A city name, zip code, or other location search
                                term.</p>
                            </li>
                            <li>
                                <p className={styles.highlightedText}>lat</p>
                                <p className={styles.standardText}>— A specific latitude. If used, you must also send
                                long and must not send location.</p>
                            </li>
                            <li>
                                <p className={styles.highlightedText}>long</p>
                                <p className={styles.standardText}>—  A specific longitude. If used, you must also
                                send lat and must not send location.</p>
                            </li>
                            <li>
                                <p className={styles.highlightedText}>full_time</p>
                                <p className={styles.standardText}>— If you want to limit results to full time
                                positions set this parameter to 'true'.</p>
                            </li>
                        </ul>
                        
                        <strong>Examples</strong>
                        <ul>
                            <li>
                                <a href="https://jobs.github.com/positions.json?description=python&full_time=true&location=sf">
                                https://jobs.github.com/positions.json?description=python&full_time=true&location=sf
                                </a>
                            </li>
                            <li>
                                <a href="https://jobs.github.com/positions.json?search=node">
                                https://jobs.github.com/positions.json?search=node
                                </a>
                            </li>
                            <li>
                                <a href="https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823">
                                https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={styles.stepsContainer}>
                <h2>GET /positions/ID.json</h2>
                    <div className={styles.individualStep}>
                        <p>Retrieve the JSON representation of a single job posting.</p>
                        <strong>Parameters</strong>
                        <ul>
                            <li>
                                <p className={styles.highlightedText}>markdown</p>
                                <p className={styles.standardText}>— ASet to 'true' to get the description and how_to_apply fields as Markdown.</p>
                            </li>
                        </ul>
                        <strong>Examples</strong>
                        <ul>
                            <li>
                                <a href="https://jobs.github.com/positions/21516.json">
                                https://jobs.github.com/positions/21516.json
                                </a>
                            </li>
                            <li>
                                <a href="https://jobs.github.com/positions/21516.json?markdown=true">
                                https://jobs.github.com/positions/21516.json?markdown=true
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                
            </div>
            
        </div>
    );
}