import { 
    IonApp, IonContent, IonHeader, IonFooter, IonMenu, IonPage, IonSplitPane, 
    IonTitle, IonToolbar, IonMenuToggle, IonList, IonItem, IonButtons, IonButton, 
    IonIcon, IonLabel, IonSearchbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonCardContent
  } from "@ionic/react";
  import { useLocation } from 'react-router-dom';
  import { menuOutline } from "ionicons/icons";
  import { useState } from "react";
  import { homeOutline, cubeOutline, cartOutline, pieChartOutline, timeOutline, basketOutline, settingsOutline } from 'ionicons/icons';
  import './Pos.css';
  
  const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
  
    return (
      <IonApp>
        <IonSplitPane contentId="main-content">
          {/* Sidebar Menu */}
          <IonMenu contentId="main-content" side="start" menuId="leftMenu" type="overlay">
            <IonHeader>
              <IonToolbar color="primary">
                <IonTitle>LOGO</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem button className="ion-padding active">
                    <div className="icon-container">
                        <IonIcon icon={homeOutline} style={{ fontSize: '24px', color: 'primary' }} />
                        <IonLabel>Home</IonLabel>
                    </div>
                </IonItem>
                <IonItem button
                  routerLink="/products" 
                  className={location.pathname === "/products" ? "ion-padding active-link" : "ion-padding"}
                >
                    <div className="icon-container">
                        <IonIcon icon={cubeOutline} style={{ fontSize: '24px', color: 'primary' }} />
                        <IonLabel>Products</IonLabel>
                    </div>
                </IonItem>
                <IonItem button 
                  routerLink="/pos" 
                  className={location.pathname === "/pos" ? "ion-padding active-link" : "ion-padding"}
                >
                    <div className="icon-container">
                        <IonIcon icon={cartOutline} style={{ fontSize: '24px', color: 'primary' }} />
                        <IonLabel>Pos</IonLabel>
                    </div>
                </IonItem>
                <IonItem button 
                  routerLink="/orders" 
                  className={location.pathname === "/orders" ? "ion-padding active-link" : "ion-padding"}
                >
                    <div className="icon-container">
                        <IonIcon icon={basketOutline} style={{ fontSize: '24px', color: 'primary' }} />
                        <IonLabel>Orders</IonLabel>
                    </div>
                </IonItem>
                <IonItem button
                  routerLink="/history" 
                  className={location.pathname === "/history" ? "ion-padding active-link" : "ion-padding"}
                >
                    <div className="icon-container">
                        <IonIcon icon={timeOutline} style={{ fontSize: '24px', color: 'primary' }} />
                        <IonLabel>History</IonLabel>
                    </div>
                </IonItem>
                <IonItem button 
                  routerLink="/report" 
                  className={location.pathname === "/report" ? "ion-padding active-link" : "ion-padding"}
                >
                    <div className="icon-container">
                        <IonIcon icon={pieChartOutline} style={{ fontSize: '24px', color: 'primary' }} />
                        <IonLabel>Report</IonLabel>
                    </div>
                </IonItem>
                <IonItem button 
                  routerLink="/settings" 
                  className={location.pathname === "/settings" ? "ion-padding active-link" : "ion-padding"}
                >
                    <div className="icon-container">
                        <IonIcon icon={settingsOutline} style={{ fontSize: '24px', color: 'primary' }} />
                        <IonLabel>Settings</IonLabel>
                    </div>
                </IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
  
          {/* Main Content Area */}
          <IonPage id="main-content">
            {/* Header */}
            {/* <IonHeader>
              <IonToolbar color="primary">
                <IonButtons slot="start">
                  <IonMenuToggle>
                    <IonButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                      <IonIcon icon={menuOutline} />
                    </IonButton>
                  </IonMenuToggle>
                </IonButtons>
                <IonTitle>My App</IonTitle>
              </IonToolbar>
            </IonHeader> */}
  
            {/* Content */}
            <IonContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonSearchbar></IonSearchbar>
                  </IonCol>
                  <IonCol>2</IonCol>
                  <IonCol>
                    <IonCard>
                      <IonCardHeader>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                      </IonCardHeader>

                      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <h2>Welcome to Ionic React</h2>
              <p>This is the main content area.</p>
            </IonContent>
  
            {/* Footer */}
            {/* <IonFooter>
              <IonToolbar>
                <IonTitle size="small" className="ion-text-center">myPOS © 2025 <a>Powered By Dyn Edge Phils Inc.</a></IonTitle>
              </IonToolbar>
            </IonFooter> */}
          </IonPage>
        </IonSplitPane>
      </IonApp>
    );
  };
  
  export default App;
  