import React, { Component } from 'react'
import { Set } from '../../../../data-structures/set/src/set'
import { symmetricDifference } from '../src/symmetric-difference'
import './symmetric-difference.demo.css'

export default {
  title: 'Algorithms|Set/Symmetric Difference',
}

class SymmetricDifferenceOfTwoSetsVisualizer extends Component {
  state = {
    set1Csv: '',
    set2Csv: '',
  }

  handleSet1CsvChange = e => {
    this.setState({ set1Csv: e.target.value })
  }

  handleSet2CsvChange = e => {
    this.setState({ set2Csv: e.target.value })
  }

  findSymmetricDifference = () => {
    const { set1Csv, set2Csv } = this.state

    const set1 = new Set()
    set1Csv.split(',').forEach(val => {
      if (val.trim()) {
        set1.add(val.trim())
      }
    })

    const set2 = new Set()
    set2Csv.split(',').forEach(val => {
      if (val.trim()) {
        set2.add(val.trim())
      }
    })

    return <p>{symmetricDifference(set1, set2).enumerate().join(', ')}</p>
  }

  render() {
    const { set1Csv, set2Csv } = this.state

    return (
      <div className="symmetricDifferenceDemo">
        <h1>Symmetric Difference of Two Sets Demo</h1>
        <p>
          Enter comma-separated values into each text input to add items to each
          set.
        </p>
        <form onSubmit={this.addItem}>
          <label>
            <span>Set 1:</span>
            <input
              value={set1Csv}
              placeholder="Ex. 1, 2, 3"
              onChange={this.handleSet1CsvChange}
              className="ti input"
            />
          </label>
          <br />
          <label>
            <span>Set 2:</span>
            <input
              value={set2Csv}
              placeholder="Ex. 3, 4, 5"
              onChange={this.handleSet2CsvChange}
              className="ti input"
            />
          </label>
        </form>
        <div>
          <h2>Symmetric Difference of Set 1 and Set 2:</h2>
          {this.findSymmetricDifference()}
        </div>
      </div>
    )
  }
}

export const symmetricDifferenceOfTwoSetsVisualizer = () => (
  <SymmetricDifferenceOfTwoSetsVisualizer />
)
