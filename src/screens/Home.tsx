import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getBooks } from '../data/api'
import { BookDTO } from '../domain/entities'

const Home = () => {
    const [books, setBooks]=useState<BookDTO[]>()
    useEffect(()=>{
        const booksData =async () => {
            const data = await getBooks().then(response =>{
                setBooks(response.data)

            })
        } 
        booksData()
    },[])
    
    console.log(books);
    
  return (
    <View style={style.container}>
      {
        books?.map(book=>(
            <View key={book.id}>
                <Text>Titulo: {book.title}</Text>
                <Text>Titulo: {book.author}</Text>
                <Text>Titulo: {book.description}</Text>

            </View>
        ))
      }
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },

})
export default Home