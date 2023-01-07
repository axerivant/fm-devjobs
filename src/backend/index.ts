import DefaultJobs from './data.json'

/** Returns default jobs in data.json */
export const fetchDefaultJobs = (): Job[] => {
	// replace "./" with "@/src/"
	DefaultJobs.forEach((job) => (job.logo = job.logo.replace('./', '/')))
	return DefaultJobs
}
