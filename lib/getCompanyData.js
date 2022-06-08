const SERVERURL = "http://127.0.0.1:8000/";

export async function getAllCompanyData() {
  const res = await fetch(new URL(`${SERVERURL}api/companies/`));
  const companies = await res.json();
  return companies;
}

export async function getAllCompanyIds() {
  const res = await fetch(new URL(`${SERVERURL}api/companies/`));
  const companies = await res.json();
  
  return companies.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  })
}

export async function getCompanyData(id) {
  const res = await fetch(new URL(`${SERVERURL}api/companies/${id}/`))
  const companyDetail = await res.json();
  return companyDetail;
}
