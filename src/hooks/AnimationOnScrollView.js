/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react'

const animationOnScrollView = (domRef) => {
  const [isVisible, setVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting)
      })
    })
    observer.observe(domRef.current)
    return () => observer.unobserve(domRef.current)
  }, [])

  return {
    isVisible,
    setVisible
  }
}

export default animationOnScrollView