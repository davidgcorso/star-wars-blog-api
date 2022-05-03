import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";



export const People = (props) => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    let peopleList = store.people.results?.map((vehicle, index) => {
    return <div>hola</div>
        // <></>
        // <div className="card" key={index}>
        //     <img src="https://www.latercera.com/resizer/SVYKp0VtlI6_8CBQU3wNMUYrlko=/768x0/smart/filters:quality(70):format(webp):no_upscale()/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/DQELXIPCMBCEJFABKNMNRGG5OE.jpg" className="card-img-top" alt="..." />
        //     <div className="card-body">
        //         <h5 className="card-title">{people.name}</h5>
        //         <p className="card-text">
        //             <h1> Characters </h1>
        //             <Grid Columns={3}>
        //                 {data.map( people, i)} => {
        //                     return (
        //                         <Grid.Column key={i}>
        //                             <Card>
        //                                 <Card.Content>
        //                                     <Card.Header> people.name </Card.Header>
        //                                         <Card.description>
        //                                             <strong>Height</strong>
        //                                             <p>{people.height}</p>
        //                                             <strong> Mass</strong>
        //                                             <p>{people.mass}</p>
        //                                             <strong> Hair Color </strong>
        //                                             <p>{people.hair_color}</p>

        //                                         </Card.description>
        //                                 </Card.Content>
        //                             </Card>
        //                         </Grid.Column>

        //             )
        //         })}
        //     </Grid>
        // </>
   
      
    } 
    )     
}         
                        
                                     
