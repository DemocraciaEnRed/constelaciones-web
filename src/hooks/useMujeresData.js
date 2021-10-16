import { useStaticQuery, graphql } from "gatsby"

export const useMujeresData = () => {
  const mujeresData = useStaticQuery(graphql`
        query MujeresQuery {
            allMujeresJson {
                edges {
                    node {
                        title
                        imagen
                        page
                    }
                }
            }
        }
    `)
   return mujeresData.allMujeresJson.edges
}