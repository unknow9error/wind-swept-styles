import { TableInterface } from './Table.types';

export const Table: TableInterface = ({ columns, dataSource }) => {
    return (
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    {Array.isArray(columns) && columns.length > 0 && (
                        <thead className="min-w-full leading-normal">
                            <tr>
                                {columns.map((column) => {
                                    return (
                                        <th
                                            key={`${column.dataIndex}-th`}
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            {column.title}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                    )}
                    <tbody>
                        {Array.isArray(dataSource) &&
                            dataSource.map((data, dataIndex) => (
                                <tr key={dataIndex}>
                                    {columns.map((column) => {
                                        const value = column.dataIndex
                                            ? data[column.dataIndex]
                                            : '';

                                        return (
                                            <td
                                                key={
                                                    column.key ||
                                                    column.dataIndex
                                                }
                                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                            >
                                                {column.render
                                                    ? column.render(
                                                          value,
                                                          data,
                                                          dataIndex
                                                      )
                                                    : value}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
