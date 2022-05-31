function Stats() {
  return (
    <div className="flex justify-center">
        <table>
            <tr className="bg-gradient-to-r from-transparent via-blue-700 
            to-transparent text-2xl">
                <th className="px-5 text-center">GP</th>
                <th className="px-5 text-center">PTS</th>
                <th className="px-5 text-center">REB</th>
                <th className="px-5 text-center">TOV</th>
                <th className="px-5 text-center">STL</th>
                <th className="px-5 text-center">BLK</th>
                <th className="px-5 text-center">FG%</th>
                <th className="px-5 text-center">FT%</th>
                <th className="px-5 text-center">3PM</th>
                <th className="px-5 text-center">+/-</th>
                <th className="px-5 text-center">PF</th>
            </tr>
            <tr className="mt-10 bg-gradient-to-r from-transparent via-blue-700 
            to-transparent text-2xl">
                <td className="px-5 text-center"></td>
                <td className="px-5 text-center"></td>
                <td className="px-5 text-center"></td>
                <td className="px-5 text-center"></td>
                <td className="px-5 text-center"></td>
                <td className="px-5 text-center"></td>
                <td className="px-5 text-center"></td>
                <td className="px-5 text-center"></td>
                <td className="px-5 text-center"></td>
                <td className="px-5 text-center"></td>
                <td className="px-5 text-center"></td>
            </tr>
        </table> 
    </div>
  )
}

export default Stats
