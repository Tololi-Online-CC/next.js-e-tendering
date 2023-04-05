import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { LineChart, Line } from 'recharts';
import RegulatorLayout from '@/components/regulatorLayout';

const data = [
  { name: 'Mar', Bids: 2400, Awards: 400 },
  { name: 'Apr', Bids: 1398, Awards: 300 },
  { name: 'Jun', Bids: 9800, Awards: 2000 },
  { name: 'Jul', Bids: 3908, Awards: 800 },
  { name: 'Aug', Bids: 4800, Awards: 1200 },
  { name: 'Sep', Bids: 3800, Awards: 200 },
  { name: 'Oct', Bids: 4300, Awards: 2500 },
  { name: 'Nov', Bids: 2400, Awards: 1100 },
  { name: 'Dec', Bids: 1398, Awards: 450 },
  { name: 'Jan', Bids: 9800, Awards: 4089 },
  { name: 'Feb', Bids: 3908, Awards: 530 },
  { name: 'Mar', Bids: 4800, Awards: 590 },
];

const data2 = [
  { name: 'Pending', sales: 1398 },
  { name: 'Approved', sales: 4800 },
  { name: 'Awarded', sales: 4800 },
  { name: 'Rejected', sales: 3908 },
];

const data3 = [
  { name: 'Contractors', sales: 1398 },
  { name: 'Operators', sales: 700 },
];

const data4 = [
  { name: 'Mar', Sales: 24001 },
  { name: 'Apr', Sales: 13982 },
  { name: 'Jun', Sales: 98009 },
  { name: 'Jul', Sales: 39085 },
  { name: 'Aug', Sales: 48003 },
  { name: 'Sep', Sales: 38020 },
  { name: 'Oct', Sales: 43040 },
  { name: 'Nov', Sales: 24020 },
  { name: 'Dec', Sales: 13938 },
  { name: 'Jan', Sales: 98050 },
  { name: 'Feb', Sales: 39038 },
  { name: 'Mar', Sales: 48050 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919'];
const COLORS2 = ['#0088FE', '#FF8042']

export default function Analytics() {
  return (
    <RegulatorLayout>
      <div>
        <h2 className='h2-padding'>Monthly Cashflow</h2>
        <LineChart width={1000} height={300} data={data4}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Sales" stroke="#ffc90a" activeDot={{ r: 8 }} />
        </LineChart>

        <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center" }}>
          <div>
            <h2 style={{ textAlign: "center" }}>Bids Status</h2>
            <PieChart width={400} height={400}>
              <Pie data={data2} dataKey="sales" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
          <div>
            <h2 style={{ textAlign: "center" }}>System Users</h2>
            <PieChart width={400} height={400}>
              <Pie data={data3} dataKey="sales" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
        <h2 className='h2-padding'>Monthly Bids</h2>
        <BarChart width={1000} height={300} data={data} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Bids" fill="#515051" />
          <Bar dataKey="Awards" fill="#ffc90a" />
        </BarChart>
      </div>
    </RegulatorLayout>
  )
}


