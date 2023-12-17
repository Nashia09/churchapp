import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const posts = [
  {
    id: 1,
    title: 'Post 1',
    image: 'https://www.bootdey.com/image/280x280/7B68EE/000000',
    author: 'Jane Doe',
    date: 'January 1, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
  },
  {
    id: 2,
    title: 'Post 2',
    image: 'https://www.bootdey.com/image/280x280/7B68EE/000000',
    author: 'John Doe',
    date: 'January 2, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
  },
];

const Devotion = () => {
  return (
    <ScrollView>
      {posts.map(post => (
        <TouchableOpacity key={post.id} style={styles.post}>
          <Image source={{ uri: post.image }} style={styles.postImage} />
          <View style={styles.postContent}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postMeta}>
              by {post.author} | {post.date}
            </Text>
            <Text style={styles.postExcerpt}>{post.excerpt}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 20,
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postContent: {
    padding: 20,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postMeta: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  postExcerpt: {
    fontSize: 14,
  },
});

export default Devotion;
