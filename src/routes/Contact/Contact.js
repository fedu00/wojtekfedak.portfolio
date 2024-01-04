import React from "react"
import { SectionWrapper, ContentWrapper } from "routes/Contact/Contact.styles"
import useModal from "components/Modal/useModal"
import Footer from "components/Footer/Footer"
import CustomButton from "components/CustomButton/CustomButton"

const Contact = ({
  contactRef,
  toggleScrollToSection,
  homeRef,
  aboutRef,
  projectsRef,
}) => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal()
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("fedakwojciech@gmail.com")
    handleOpenModal()
  }
  return (
    <SectionWrapper ref={contactRef}>
      {isOpen ? (
        <Modal
          handleCloseModal={handleCloseModal}
          text="Successful email copying!"
        />
      ) : null}
      <ContentWrapper>
        <h1>Contact</h1>
        <p>Don't be shy, send a message!</p>
        <CustomButton text="CLICK TO COPY E-MAIL" onClick={handleCopyEmail} />
      </ContentWrapper>
      <Footer
        toggleScrollToSection={toggleScrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
      />
    </SectionWrapper>
  )
}

export default Contact
