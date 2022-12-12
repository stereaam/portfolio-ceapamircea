import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './About.css'

function About() {
  return (
      <><Header /><div className='d-flex flex-column justify-content-between' style={{ minHeight: '93vh' }}>

          <div className='container my-4'>
              <div className='row'>
                  <div className='col-12 col-xl-4'>
                      <div className='py-2'>
                          <div className='border border-secondary rounded p-4 about-item'>
                              <h2 className='mb-3'>Mircea Ceapa</h2>
                              <p>Given one’s unicity in the way each perceives everything,
                                  every vision is distinctive to its essence.
                                  With this being said, I would like to keep
                                  it simple about myself and invite you create`
                                  your own vision upon my work.</p>
                          </div>
                      </div>

                  </div>
                  <div className='col-12 col-xl-4 '>
                      <div className='py-2'>
                          <div className='border border-secondary rounded p-4 about-item'>
                              <h2 className='mb-3'>Academic Status</h2>
                              I recently completed a one-year New Media Design
                              course at Link Academy, which qualifies me as a
                              Certified Graphic Designer. During this course
                              I have strengthened my skills in Adobe Creative
                              Cloud (Illustrator, InDesign, Photoshop, PremierePro,
                              Dreamweaver, Acrobat). Combined with history of design,
                              I also gained knowledge regarding detailed design principles,
                              perspectives, and theories, thus helping me better
                              assimilate and integrate each concept.
                              Currently doing my Masters in Industrial Design where
                              I learned 3d modeling using the programs 3DS max,
                              Maya, Catia, Inventor and Autocad.
                          </div>
                      </div>
                  </div>
                  <div className='col-12 col-xl-4'>
                      <div className='py-2'>
                          <div className='border border-secondary rounded p-4 about-item'>
                              <h2 className='mb-3'>Design perspective</h2>
                              <p>The tenet I stand by in my creation process
                                  is “form follows function”.
                                  I always start with asking myself
                                  “What is the purpose, the message,
                                  who is addressed for?” This helps
                                  me thrive in the sphere of creation,
                                  better transpose into people’s vison,
                                  deliver and reach the goal in my visual representations.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer />
      </div></>    
   
  )
}

export default About