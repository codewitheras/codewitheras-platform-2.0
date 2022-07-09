import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../Components/Core/Banner/Banner'

const ProjectVideo = () => {
  const query = useParams()

  const {id} = query

  useEffect(() => {
    
  }, [])

  return (
    <>
      <Banner title={`Build ${id} From Scratch`} />
      <div>ProjectVideo</div>
    </>
  );
}

export default ProjectVideo