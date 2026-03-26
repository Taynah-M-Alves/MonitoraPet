import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles';

export function HomeScreen() {
  return (
    <SafeAreaView style={[styles.safeArea, { paddingTop: RNStatusBar.currentHeight }]}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={require('../../../assets/logo.jpeg')}
            style={styles.logo}
          />
        </View>

        <Text style={styles.sectionTitle}>Meus Pets</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.petsScroll}>
          <View style={styles.petCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
              style={styles.petImage}
            />
            <View style={styles.petInfo}>
              <Text style={styles.petName}>Pipoca</Text>
              <Text style={styles.petStatus}>Status: Dormindo</Text>
            </View>
          </View>

          <View style={styles.petCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
              style={styles.petImage}
            />
            <View style={styles.petInfo}>
              <Text style={styles.petName}>Bolinha</Text>
              <Text style={styles.petStatus}>Status: Ativo</Text>
            </View>
          </View>
        </ScrollView>

        <Text style={styles.sectionTitle}>Acompanhamento do Dia</Text>
        <View style={styles.trackerCard}>
          <View style={styles.trackerRow}>
            <View style={styles.trackerStat}>
              <Ionicons name="moon" size={20} color="#2e6693" />
              <Text style={styles.trackerLabel}>Tempo de Sono</Text>
            </View>
            <View style={styles.trackerStat}>
              <FontAwesome5 name="paw" size={18} color="#e69045" />
              <Text style={styles.trackerLabel}>Nível de Atividade</Text>
            </View>
          </View>

          <View style={[styles.trackerRow, { marginBottom: 0 }]}>
            <View style={styles.circleChartWrapper}>
              <View style={styles.circleChartCutout} />
            </View>

            <View style={styles.barChartWrapper}>
              <View style={[styles.bar, { height: 20 }]} />
              <View style={[styles.bar, { height: 35 }]} />
              <View style={[styles.bar, { height: 15 }]} />
              <View style={[styles.bar, { height: 45 }]} />
              <View style={[styles.bar, { height: 25 }]} />
              <View style={[styles.bar, { height: 50 }]} />
              <View style={[styles.bar, { height: 30 }]} />
            </View>
          </View>

          <View style={styles.waterRow}>
            <Ionicons name="water" size={20} color="#2e6693" />
            <Text style={styles.trackerLabel}>Consumo de Água</Text>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarFill} />
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="location-sharp" size={32} color="#fff" />
            <Text style={styles.actionLabel}>LOCALIZAÇÃO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="camera" size={32} color="#fff" />
            <Text style={styles.actionLabel}>CÂMERA AO VIVO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <MaterialCommunityIcons name="format-list-bulleted" size={32} color="#fff" />
            <Text style={styles.actionLabel}>HISTÓRICO</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Comunidade & Dicas</Text>
        <View style={styles.tipsCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60' }}
            style={styles.tipsImage}
          />
          <Text style={styles.tipsTitle}>Dicas de Alimentação</Text>
        </View>

      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={26} color="#2e6693" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications-outline" size={26} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={26} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings-outline" size={26} color="#666" />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
