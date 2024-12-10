import { test, expect } from '@playwright/test';

const baseUrl = 'https://simple-books-api.glitch.me';
const token = 'd88d1f914f9f4d063f8b8de8e5fe57264ba926d0f235c97882d5ae3c4500e57f';

let orderNewId;

test.describe('API Testing - Submit an Order', () => {
  test('Status of the API', async ({ request }) => {
    const response = await request.get(`${baseUrl}/status`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('status', 'OK');
  });

  test('Auth - Create client', async ({ request }) => {
    const response = await request.post(`${baseUrl}/api-clients/`, {
      data: {
        clientName: 'Adil',
        clientEmail: 'adil@example.com',
      },
    });
  
    if (response.status() === 409) {
      console.log('User already exists, proceeding with existing user.');
      expect(response.status()).toBe(409); 
    } else {
      expect(response.status()).toBe(201); 
      const responseBody = await response.json();
      console.log('Created user:', responseBody);
    }
  });
  

  test('Submit an Order', async ({ request }) => {
    const response = await request.post(`${baseUrl}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        bookId: 3,
        customerName: 'Adi Enaz',
      },
    });
    expect(response.status()).toBe(201);

    const order = await response.json();
    orderNewId = order.orderId; 
    console.log('Order ID:', orderNewId);
  });

  test('401 Error - Submit an Order without Auth', async ({ request }) => {
    const response = await request.post(`${baseUrl}/orders`, {
      data: {
        bookId: 3,
        customerName: 'Adi Enaz',
      },
    });
    expect(response.status()).toBe(401);
  });

  test('400 Error - Missing bookId', async ({ request }) => {
    const response = await request.post(`${baseUrl}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        customerName: 'Adi Enaz',
      },
    });
    expect(response.status()).toBe(400);
  });

  test('400 Error - Non-existent bookId', async ({ request }) => {
    const response = await request.post(`${baseUrl}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        bookId: 999,
        customerName: 'Adi Enaz',
      },
    });
    expect(response.status()).toBe(400);
  });

  test('Submit an Order with max customerName length', async ({ request }) => {
    const response = await request.post(`${baseUrl}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        bookId: 3,
        customerName: 'Adi Enaz dfjskdfdj sjdfls f jdf djfoei ssk',
      },
    });
    expect(response.status()).toBe(201);
  });

  test('Get List of Orders', async ({ request }) => {
    const response = await request.get(`${baseUrl}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    expect(response.status()).toBe(200);
  });

  test('Update Order', async ({ request }) => {
    const response = await request.patch(`${baseUrl}/orders/${orderNewId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        customerName: 'Elina Sho',
      },
    });
    expect(response.status()).toBe(204);
  });

  test('Delete Order', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/orders/${orderNewId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    expect(response.status()).toBe(204);
  });
});
