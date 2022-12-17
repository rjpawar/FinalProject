import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaMapMarkedAlt, FaBook, FaPhone } from 'react-icons/fa';
import image from '../../assets/avatar1.png';

const photo_url = (ref) => 
`https://maps.googleapis.com/maps/api/place/photo?photoreference=${ref}&key=AIzaSyBlHhL9EqgJx0ZFIuzc5vn2yUAe96pZhs8&maxheight=300&maxwidth=300`;

export default function DetailPlace(){
    const[placeDetail, setPlaceDetail] = useState({});
    let params = useParams();

    const fetchPlaceDetail = () => {
        return fetch(`/api/place/${params.placeId}`)
            .then(response => response.json())
            .then(placeDetailResult => {
                return placeDetailResult.result;
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const fetchData = async () => setPlaceDetail(await fetchPlaceDetail());
        fetchData();
    }, [])

    return(
        <Container>
             {/* place name title */}
            <section className="wd-section-medium bg-color">
                <div className="container">
                    <div className="wd-row">
                        <div className="col-md-12 text-white text-center">
                            <h2 className="section-title "> {placeDetail.name} </h2>
                        </div>
                    </div>
                </div>
            </section>
           
        
            {/* address info under place name title */}
            <div className="container bootstrap snippets bootdeys">
                <div className="wd-row text-center">
                    <div className="col-sm-4">
                        <div className="wd-contact-detail-box">
                            <FaPhone size={50} color="#f16000"/>
                            <h4>Phone</h4>
                            <p>{placeDetail.formatted_phone_number}</p>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="wd-contact-detail-box">
                            <FaMapMarkedAlt size={50} color="#f16000"/>
                            <h4>Location</h4>
                            <p>
                                {placeDetail.formatted_address} 
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="wd-contact-detail-box">
                            <FaBook size={50} color="#f16000"/>    
                            <h4>Website</h4>
                            <p className="p-website">
                                <a href={placeDetail.website}>{placeDetail.website}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>    


            {
                placeDetail.photos &&
                <div className="container">
                    <div className="wd-row wd-form-row wd-align-items-center">
                        <div className="col-3">
                            <div className="wd-img-square">
                            <img src={photo_url(placeDetail.photos[0].photo_reference)} alt="..." className="wd-img-cover"/>
                            </div> 
                        </div>
                    <div className="col-6">
                        <div className="wd-row wd-form-row align-items-end mb-2">
                            <div className="col-7">
                                <div className="wd-img-square">
                                <img src={photo_url(placeDetail.photos[1].photo_reference)} alt="..." className="wd-img-cover"/>
                                </div>
                            </div>
                        <div className="col-5">
                            <div className="wd-img-square">
                            <img src={photo_url(placeDetail.photos[2].photo_reference)} alt="..." className="wd-img-cover"/>
                            </div>
                        </div>
                        </div> 
                        <div className="wd-row wd-form-row">
                        <div className="col-5">
                            <div className="wd-img-square">
                            <img src={photo_url(placeDetail.photos[3].photo_reference)} alt="..." className="wd-img-cover"/>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="wd-img-square">
                            <img src={photo_url(placeDetail.photos[4].photo_reference)} alt="..." className="wd-img-cover"/>
                            </div>
                        </div>
                        </div> 
                    </div>
                    <div className="col-3">
                        <div className="wd-img-square">
                        <img src={photo_url(placeDetail.photos[5].photo_reference)} alt="..." className="wd-img-cover"/>
                        </div>
                    </div>
                    </div>
                </div>
            }


            <div className = 'wd-PlaceName'>
                <h4>Reviews</h4>
            </div>
            <div className="wd-row">
                {placeDetail.reviews && placeDetail.reviews.map(review => 
                    <div key={review.author_name} className="col-md-12">
                        <div className="media wd-media-comment">
                            <img className="d-flex wd-g-width-50 wd-g-height-50 rounded-circle wd-g-mt-3 wd-g-mr-15" src={image} alt=""/>

                            <div className="media-body wd-u-shadow-v18 wd-g-bg-secondary wd-g-pa-30">
                            <div className="g-mb-15">
                                <h5 className="h6 g-color-gray-dark-v1 mb-0">{review.author_name}</h5>
                                <span className="wd-g-color-gray-dark-v4 wd-g-font-size-12">{review.relative_time_description}</span>
                            </div>
                        
                            <p className = "wd-g-font-size-12">{review.text}</p>
                        
                            <ul className="list-inline d-sm-flex my-0">
                                <li className="list-inline-item wd-g-font-size-12">
                                    Rating: {review.rating}
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>         
    </Container>
)

}
