// Write your code here.

import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app-container">
      <h1>Faqs</h1>
      <div className="faqs-container">
        <ul>
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqsDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
