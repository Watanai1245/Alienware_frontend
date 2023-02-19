import { render, screen } from '@testing-library/react';
import { expect, jest, test } from '@jest/globals';
import Bar from '../components/Bar';
import { fetchProducts as mockFetchProducts } from '../api';

jest.mock('../api')

test("test API", async () => {

    const mockData =
        [
            {
                "Name": "Robongbang Propolis",
                "PID": 1,
                "CID": 1,
                "Price": 938,
                "Stock": 77,
                "Detail": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
            },
            {
                "Name": "Nu Skin Nu Colour",
                "PID": 2,
                "CID": 2,
                "Price": null,
                "Stock": 37,
                "Detail": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
            },
            {
                "Name": "Diabetic Siltussin DM DAS-Na",
                "PID": 3,
                "CID": 3,
                "Price": 916,
                "Stock": 64,
                "Detail": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            }
        ]

    mockFetchProducts.mockImplementation(callBack => {
        callBack(mockData)
    })
    render(<Bar />);

    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(mockData.length + 1);
});