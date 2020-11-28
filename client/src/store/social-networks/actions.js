export const LOAD_SOCIAL_NETWORKS = "LOAD_SOCIAL_NETWORKS";
export const SOCIAL_NETWORKS_LOADING = "SOCIAL_NETWORKS_LOADING";


export const setSNData = (data) => ({
  type: LOAD_SOCIAL_NETWORKS,
  payload: data
})

export const SNDataLoading = (isLoading) => ({
  type: SOCIAL_NETWORKS_LOADING,
  payload: isLoading
})