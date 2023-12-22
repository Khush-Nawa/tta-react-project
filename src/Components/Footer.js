import React from 'react'

function Footer() {
  return (
    <footer className='border border-dark'>
            <div className='p-4 Container'>
                <div className='row'>
                    <div lg="6" md="12" className='col mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Footer Content</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                            Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus sint!
                        </p>
                    </div>
                    <div lg="3" md="6" className='col mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Links</h5>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 2
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 3
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 4
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='p-3'>
                &copy; 2023 Copyright: Educademy LLP.com
            </div>
        </footer>
  )
}

export default Footer