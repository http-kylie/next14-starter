import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Search, Filter, Ship, Plane } from 'lucide-react'
import styles from './page.module.css'

const ShippingApp = () => {
  const [selectedCity, setSelectedCity] = useState('')
  const [weight, setWeight] = useState('')
  const [dimensions, setDimensions] = useState('')

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoImage}></div>
          <h1 className={styles.logoText}>Soltrace</h1>
        </div>
        <button className={styles.homeButton}>
          Home <ChevronDown className={styles.icon} />
        </button>
      </header>

      <div className={styles.content}>
        <div className={styles.packageInfo}>
          <h2 className={styles.sectionTitle}>Package Info</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Tell us more about your shipment.</label>
              <input
                type="text"
                placeholder="City Departing From"
                className={styles.input}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="City Sending To"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Total Weight (kg)"
                className={styles.input}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Dimensions: Width(m) x Height(m)"
                className={styles.input}
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
              />
            </div>
            <button className={styles.submitButton}>Submit</button>
          </form>
        </div>

        <div className={styles.options}>
          <h2 className={styles.optionsTitle}>Here's some options for you to consider...</h2>
          <div className={styles.filters}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
              />
              <Search className={styles.searchIcon} />
            </div>
            <button className={styles.filterButton}>
              Currency <ChevronDown className={styles.icon} />
            </button>
            <button className={styles.filterButton}>
              Filters <Filter className={styles.icon} />
            </button>
          </div>

          {[
            { name: 'Lalamove', rating: 4, ocean: true, air: true, coverage: 'Nationwide Only', pricing: '100 - 200 MYR' },
            { name: 'Amazon', rating: 5, ocean: false, air: true, coverage: 'International', pricing: '800 - 900 MYR' },
            { name: 'FedEx', rating: 3, ocean: true, air: false, coverage: 'Nationwide Only', pricing: '300 - 400 MYR' },
          ].map((courier, index) => (
            <div key={index} className={styles.courierCard}>
              <div className={styles.courierHeader}>
                <h3 className={styles.courierName}>Courier Name: {courier.name}</h3>
                <div className={styles.rating}>
                  {'★'.repeat(courier.rating)}{'☆'.repeat(5 - courier.rating)}
                </div>
              </div>
              <div className={styles.courierDetails}>
                <div className={styles.detailGroup}>
                  <p className={styles.detailLabel}>Mode of Delivery</p>
                  <div className={styles.deliveryModes}>
                    {courier.ocean && <Ship className={styles.modeIcon} />}
                    {courier.air && <Plane className={styles.modeIcon} />}
                  </div>
                </div>
                <div className={styles.detailGroup}>
                  <p className={styles.detailLabel}>Coverage</p>
                  <p>{courier.coverage}</p>
                </div>
                <div className={styles.detailGroup}>
                  <p className={styles.detailLabel}>Pricing (per kg)</p>
                  <p>{courier.pricing}</p>
                </div>
              </div>
              <div className={styles.courierActions}>
                <button className={styles.viewDetailsButton}>View Details</button>
                <button className={styles.requestQuoteButton}>
                  Request Quote <ChevronDown className={styles.icon} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShippingApp