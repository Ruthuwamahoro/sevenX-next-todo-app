import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
  home: MyHomePage(),
));

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text(
          'Shopping Mastermind',
          style: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
            fontSize: 30.0,
          ),
        ),
        centerTitle: true,
        backgroundColor: Colors.blue[900],
      ),
      body: Center(
        child: ListView(
          padding: EdgeInsets.all(16.0),
          children: <Widget>[
            Text(
              'Shopping List',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              textAlign: TextAlign.center,
            ),
            SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Chip(
                  label: Text('Groceries'),
                  backgroundColor: Colors.green[300],
                ),
                Chip(
                  label: Text('Electronics'),
                  backgroundColor: Colors.blue[300],
                ),
                Chip(
                  label: Text('Clothes'),
                  backgroundColor: Colors.purple[300],
                ),
              ],
            ),
            SizedBox(height: 20),
            GridView.count(
              crossAxisCount: 2,
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              children: <Widget>[
                shoppingItem('Apples', Icons.local_grocery_store, Colors.red),
                shoppingItem('Laptop', Icons.computer, Colors.blue),
                shoppingItem('T-Shirt', Icons.checkroom, Colors.purple),
                shoppingItem('Bananas', Icons.local_grocery_store, Colors.yellow),
                shoppingItem('Headphones', Icons.headphones, Colors.orange),
                shoppingItem('Shoes', Icons.shopping_bag, Colors.brown),
              ],
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          print('Hello Shopping Mastermind');
        },
        child: Icon(Icons.add, color: Colors.white),
        backgroundColor: Colors.red[600],
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.shopping_cart),
            label: 'Cart',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.account_circle),
            label: 'Profile',
          ),
        ],
        selectedItemColor: Colors.amber[800],
      ),
    );
  }

  Widget shoppingItem(String title, IconData icon, Color color) {
    return Card(
      color: color.withOpacity(0.1),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, size: 50, color: color),
          SizedBox(height: 10),
          Text(
            title,
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              TextButton(
                onPressed: () {},
                child: Text('View'),
                style: TextButton.styleFrom(foregroundColor: color),
              ),
              ElevatedButton(
                onPressed: () {},
                child: Text('Buy'),
                style: ElevatedButton.styleFrom(foregroundColor: color),
              ),
              OutlinedButton(
                onPressed: () {},
                child: Text('Remove'),
                style: OutlinedButton.styleFrom(foregroundColor: color),
              ),
            ],
          )
        ],
      ),
    );
  }
}