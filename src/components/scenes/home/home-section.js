import React from 'react'

const HomeSection = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
)

export default HomeSection
