import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = {
  "Medaxil": [
    {
      "doc1": {
        "mdate": "01.01.0001",
        "IDPerson": "KM000001",
        "IDAnbar": "MS000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    },
    {
      "doc2": {
        "mdate": "01.01.0001",
        "IDPerson": "KM000002",
        "IDAnbar": "MS000001",
        "DocSum": 100.00,
        "Mallar": [
          {
            "IDmal": "KM0000002",
            "Say": 20,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    }
  ],
  "Mexaric": [
    {
      "doc1": {
        "mdate": "01.01.0001",
        "IDPerson": "KM000001",
        "IDAnbar": "MS000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    },
    {
      "doc2": {
        "mdate": "01.01.0001",
        "IDPerson": "KM000002",
        "IDAnbar": "MS000001",
        "DocSum": 100.00,
        "Mallar": [
          {
            "IDmal": "KM0000002",
            "Say": 20,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    }
  ],
  "Satis": [
    {
      "doc1": {
        "mdate": "01.01.0001",
        "IDPerson": "KM000001",
        "IDAnbar": "MS000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    },
    {
      "doc2": {
        "mdate": "01.01.0001",
        "IDPerson": "KM000002",
        "IDAnbar": "MS000001",
        "DocSum": 100.00,
        "Mallar": [
          {
            "IDmal": "KM0000002",
            "Say": 20,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    }
  ],
  "Invertar": [
    {
      "doc1": {
        "mdate": "01.01.0001",
        "IDAnbar": "MS000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    },
    {
      "doc2": {
        "mdate": "01.01.0001",
        "IDAnbar": "MS000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    }
  ],
  "Yerdeyisme": [
    {
      "doc1": {
        "mdate": "01.01.0001",
        "IDAnbarOUT": "MS000001",
        "IDAnbarIn": "MS000002",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    },
    {
      "doc2": {
        "mdate": "01.01.0001",
        "IDAnbar": "MS000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    }
  ],
  "mDest": [
    {
      "doc1": {
        "IDest": "2400000000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    },
    {
      "doc2": {
        "IDest": "2400000000002",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    }
  ]
};

const StockInScreen = () => {
  const navigation = useNavigation();

  const handleAddButtonPress = () => {
    // Navigate to the StockAcceptScreen
    navigation.navigate("Mal Qəbul");
  };

  const sellers = data.Medaxil.map((item) => {
    const docData = Object.values(item)[0];
    return docData.IDPerson;
  });

  const prices = data.Medaxil.map((item) => {
    const docData = Object.values(item)[0];
    return docData.DocSum;
  });

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Satıcı</Text>
        <Text style={styles.headerText}>Qiymət</Text>
      </View>
      <FlatList
        data={sellers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.columnLeft}>{item}</Text>
            <Text style={styles.columnRight}>{prices[index]} AZN</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddButtonPress}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007BFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  columnLeft: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
  },
  columnRight: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StockInScreen;
