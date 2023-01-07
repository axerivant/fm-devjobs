import DefaultJobs from './data.json'

// replace "./" with "@/src/"
DefaultJobs.forEach((job) => (job.logo = job.logo.replace('./', '/')))

/** Returns default jobs in data.json */
export const fetchDefaultJobs = (): Job[] => {
	return DefaultJobs
}

export const getJobByID = (id: string): Job => {
	const res = DefaultJobs.find((job) => job.id === id)
	if (!res) throw new Error('Could not find a job of given ID')
	return res
}
