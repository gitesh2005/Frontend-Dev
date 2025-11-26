class FitnessAnalytics {
  constructor(data) {
    if (!Array.isArray(data) || data.length === 0) throw new Error('Dataset is empty')
    this.data = data
  }

  getActiveUsers(minSteps = 7000) {
    return this.data.filter(u => u.steps > minSteps).map(u => u.user)
  }

  getAverageCalories() {
    const total = this.data.reduce((s, u) => s + u.calories, 0)
    return total / this.data.length
  }

  getUserSummary() {
    return this.data.map(u => `${u.user}: ${u.steps} steps, ${u.calories} calories`)
  }
}

const dataset = [
  { user: 'A', steps: 8000, calories: 300 },
  { user: 'B', steps: 12000, calories: 500 },
  { user: 'C', steps: 4000, calories: 200 }
]

try {
  const analytics = new FitnessAnalytics(dataset)
  console.log('Active users:', analytics.getActiveUsers())
  console.log('Average calories:', analytics.getAverageCalories())
  console.log('User summary:', analytics.getUserSummary())
} catch (err) {
  console.log('Error:', err.message)
}
