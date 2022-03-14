import { Button } from 'react-bootstrap';
import { Banner } from '../../Components'

function HomeScreen() {

  return <div>
    <Banner/>

    <div className="container">
        <div className="row">
            <div className="col-md-12 col-xl-12 mt-5 mb-5">
                <div>
                    <h1>Alumnus Software</h1>
                    <p>We are a company of engineers who put engineering above everything else. And we like being in the company of engineers. That is the way it goes about Us.</p>
                    <p>We are proud of the quality and performance our solutions achieve. We grow every year but choose to remain manageable in size . That is important to ensure we get all that we demand from our colleagues.</p>
                    <p>We know our future lies in building the next generation of capabilities which come when ’things’ talk to each other, especially in the context of Internet of Things.</p>
                    <Button variant="info" type="button" className="btn btn-primary">Know More</Button>
                </div>
              </div>
        </div>
    </div>

    </div>
}

export default HomeScreen;