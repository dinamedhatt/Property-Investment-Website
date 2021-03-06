import DealSection from "./deal-section";
const Data = () => {
  return (
    <div>
      <div className="mt-5 text-center">
        <h1 className="heading-one ">Data accuracy</h1>
        <h5 className="mt-3 row col-8 offset-2 col-xl-4 offset-xl-4  col-sm-6 offset-sm-3 mb-4">
          We combine data from over 15 reliable sources both commercial and
          public
        </h5>
        <p className=" mt-2 row col-8 offset-2 col-xl-4 offset-xl-4  col-sm-6 offset-sm-3">
          Our goal is to constantly improve our data resolution to get to a
          point where each individual property can be accuratelly evaluated
          based on neighbourhood quality, investement potential and value of the
          property itself
        </p>
      </div>
      {/*            section of 2 tabel                              */}
      <section className="row col-12 m-0 tabels">
        {/*              tabel num 1                                      */}
        <section className="col-lg-5  mt-5 offset-lg-1 col-sm-8 offset-sm-2 ">
          <h2 className="mb-4 text-center">Property Market</h2>
          <div className="bordertabel ">
            <table className="tabel  ">
              <thead className="thead">
                <tr>
                  <td>Metric</td>
                  <td>Data Points</td>
                  <td>Last Update</td>
                </tr>
              </thead>
              <tbody>
                <tr className="asking-price">
                  <td className="td">Asking Price</td>
                  <td>433.233</td>
                  <td>43d ago</td>
                </tr>
                <tr className="rent">
                  <td>Rent</td>
                  <td>433.233</td>
                  <td>43d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>Cash Flow</td>
                  <td>403.233</td>
                  <td>40d ago</td>
                </tr>
                <tr className="rent">
                  <td>Physical Vacancy Rate</td>
                  <td>333.233</td>
                  <td>20d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>Economic Vacancy Rate</td>
                  <td>400.233</td>
                  <td>23d ago</td>
                </tr>
                <tr className="rent">
                  <td>Cap Rate</td>
                  <td>433.233</td>
                  <td>15d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>Operating Expense Ratio</td>
                  <td>433.233</td>
                  <td>43d ago</td>
                </tr>
                <tr className="rent">
                  <td>Gross Rent Multiplier</td>
                  <td>433.233</td>
                  <td>43d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>Occupancy</td>
                  <td>433.233</td>
                  <td>43d ago</td>
                </tr>
                <tr className="rent">
                  <td>LTV Ratio</td>
                  <td>433.233</td>
                  <td>43d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>Internal Rate of Return</td>
                  <td>433.233</td>
                  <td>43d ago</td>
                </tr>
                <tr className="rent">
                  <td>Net Operating Income</td>
                  <td>433.233</td>
                  <td>43d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>Dept Service Coverage Ratio</td>
                  <td>433.233</td>
                  <td>43d ago</td>
                </tr>
                <tr className="rent">
                  <td>Cash on Cash Return</td>
                  <td>433.233</td>
                  <td>43d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>Asking Price</td>
                  <td>433.233</td>
                  <td>43d ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/*              tabel num 2                                      */}
        <section className="col-lg-5 my-5  offset-lg-0 offset-sm-2 col-sm-8 ">
          <h2 className="mb-4 text-center">Socio-economic</h2>
          <div className="bordertabel">
            <table className="tabel">
              <thead className="thead">
                <tr>
                  <td>Metric</td>
                  <td>Data Points</td>
                  <td>Last Update</td>
                </tr>
              </thead>
              <tbody>
                <tr className="asking-price">
                  <td>Crime Rate</td>
                  <td>11%</td>
                  <td>43d ago</td>
                </tr>
                <tr className="rent">
                  <td>Occupations</td>
                  <td>80%</td>
                  <td>43d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>Poverty Rate</td>
                  <td>12%</td>
                  <td>43d ago</td>
                </tr>
                <tr className="rent">
                  <td>Average Income</td>
                  <td>62%</td>
                  <td>43d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>Racial Segregation</td>
                  <td>0</td>
                  <td>43d ago</td>
                </tr>
                <tr className="rent">
                  <td>Unemployment Rate</td>
                  <td>12%</td>
                  <td>43d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>High Education</td>
                  <td>92%</td>
                  <td>43d ago</td>
                </tr>
                <tr className="rent">
                  <td>Bankruptcy Rates</td>
                  <td>18%</td>
                  <td>43d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>Voter Registration</td>
                  <td>60%</td>
                  <td>43d ago</td>
                </tr>
                <tr className="rent">
                  <td>Voluntary Organizations</td>
                  <td>72%</td>
                  <td>43d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>Single-Parent Households</td>
                  <td>85%</td>
                  <td>43d ago</td>
                </tr>
                <tr className="rent">
                  <td>Puplic Assistance</td>
                  <td>87%</td>
                  <td>43d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>Children Free Care</td>
                  <td>79%</td>
                  <td>43d ago</td>
                </tr>
                <tr className="rent">
                  <td>High School Graduation</td>
                  <td>83%</td>
                  <td>43d ago</td>
                </tr>
                <tr className="asking-price">
                  <td>High School dropouts</td>
                  <td>17%</td>
                  <td>43d ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
      {/*             section of dealSection component                                     */}
      <DealSection />
    </div>
  );
};

export default Data;
