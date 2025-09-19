import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Equipment {
  id: number;
  name: string;
  category: string;
  price: string;
  specs: string[];
  image: string;
  rating: number;
  reviews: Review[];
  certified: boolean;
}

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

const Index: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const equipmentData: Equipment[] = [
    {
      id: 1,
      name: 'Газовый счетчик ВК-G4',
      category: 'Счетчики',
      price: '15 500 ₽',
      specs: ['Объем 4 м³/ч', 'Класс точности 1.5', 'Температура -40°C до +70°C'],
      image: '/img/6cc715f7-af26-41df-a439-30da077700d3.jpg',
      rating: 4.8,
      certified: true,
      reviews: [
        { id: 1, author: 'Сергей М.', rating: 5, text: 'Отличный счетчик, точные показания', date: '15.09.2024' },
        { id: 2, author: 'Марина К.', rating: 4, text: 'Качественное оборудование, быстро установили', date: '12.09.2024' }
      ]
    },
    {
      id: 2,
      name: 'Регулятор давления РДУК-2',
      category: 'Регуляторы',
      price: '28 900 ₽',
      specs: ['Давление 0.5-3 кгс/см²', 'Пропускная способность 10 м³/ч', 'Материал: сталь'],
      image: '/img/6cc715f7-af26-41df-a439-30da077700d3.jpg',
      rating: 4.9,
      certified: true,
      reviews: [
        { id: 1, author: 'Алексей Р.', rating: 5, text: 'Надежный регулятор, работает без сбоев', date: '18.09.2024' }
      ]
    },
    {
      id: 3,
      name: 'Газовая горелка ГГ-150',
      category: 'Горелки',
      price: '45 200 ₽',
      specs: ['Мощность 150 кВт', 'КПД 95%', 'Автоматическое управление'],
      image: '/img/6cc715f7-af26-41df-a439-30da077700d3.jpg',
      rating: 4.7,
      certified: true,
      reviews: [
        { id: 1, author: 'Дмитрий В.', rating: 5, text: 'Эффективная горелка, экономичный расход газа', date: '20.09.2024' }
      ]
    },
    {
      id: 4,
      name: 'Газоанализатор ПГА-3',
      category: 'Анализаторы',
      price: '67 800 ₽',
      specs: ['Диапазон 0-100% НКПР', 'Точность ±3%', 'Сертификат взрывозащиты'],
      image: '/img/6cc715f7-af26-41df-a439-30da077700d3.jpg',
      rating: 4.6,
      certified: true,
      reviews: [
        { id: 1, author: 'Владимир С.', rating: 4, text: 'Точные измерения, удобный интерфейс', date: '22.09.2024' }
      ]
    },
    {
      id: 5,
      name: 'Клапан запорный КШ-50',
      category: 'Арматура',
      price: '12 300 ₽',
      specs: ['Диаметр DN50', 'Давление до 16 атм', 'Материал: латунь'],
      image: '/img/6cc715f7-af26-41df-a439-30da077700d3.jpg',
      rating: 4.5,
      certified: true,
      reviews: [
        { id: 1, author: 'Игорь П.', rating: 5, text: 'Качественная арматура, герметично', date: '25.09.2024' }
      ]
    },
    {
      id: 6,
      name: 'Газовый фильтр ФГ-25',
      category: 'Фильтры',
      price: '8 750 ₽',
      specs: ['Степень очистки 5 мкм', 'Пропускная способность 25 м³/ч', 'Сменный картридж'],
      image: '/img/6cc715f7-af26-41df-a439-30da077700d3.jpg',
      rating: 4.4,
      certified: true,
      reviews: [
        { id: 1, author: 'Николай Т.', rating: 4, text: 'Хорошо очищает газ, легко обслуживать', date: '28.09.2024' }
      ]
    },
    {
      id: 7,
      name: 'Предохранительный клапан ПК-40',
      category: 'Безопасность',
      price: '19 600 ₽',
      specs: ['Давление срабатывания 4 кгс/см²', 'Пропускная способность 40 м³/ч', 'Сертификат Ростехнадзора'],
      image: '/img/6cc715f7-af26-41df-a439-30da077700d3.jpg',
      rating: 4.8,
      certified: true,
      reviews: [
        { id: 1, author: 'Андрей Л.', rating: 5, text: 'Надежная защита, качественное исполнение', date: '30.09.2024' }
      ]
    },
    {
      id: 8,
      name: 'Газовый редуктор РГ-32',
      category: 'Редукторы',
      price: '24 800 ₽',
      specs: ['Входное давление до 150 атм', 'Выходное 0.5-4 кгс/см²', 'Корпус из алюминиевого сплава'],
      image: '/img/6cc715f7-af26-41df-a439-30da077700d3.jpg',
      rating: 4.7,
      certified: true,
      reviews: [
        { id: 1, author: 'Михаил Г.', rating: 5, text: 'Стабильное давление, долговечный', date: '02.10.2024' }
      ]
    },
    {
      id: 9,
      name: 'Термозапорный клапан ТЗК-50',
      category: 'Безопасность',
      price: '31 200 ₽',
      specs: ['Температура срабатывания 100°C', 'Время закрытия 15 сек', 'Возврат в исходное положение'],
      image: '/img/6cc715f7-af26-41df-a439-30da077700d3.jpg',
      rating: 4.9,
      certified: true,
      reviews: [
        { id: 1, author: 'Сергей К.', rating: 5, text: 'Отличная защита от перегрева', date: '05.10.2024' }
      ]
    },
    {
      id: 10,
      name: 'Газовый детектор ДТГ-1',
      category: 'Датчики',
      price: '15 900 ₽',
      specs: ['Чувствительность 0.1% НКПР', 'Сигнализация звуковая/световая', 'Питание 220В/12В'],
      image: '/img/6cc715f7-af26-41df-a439-30da077700d3.jpg',
      rating: 4.6,
      certified: true,
      reviews: [
        { id: 1, author: 'Евгений М.', rating: 4, text: 'Быстрое обнаружение утечек, надежный', date: '08.10.2024' }
      ]
    },
    {
      id: 11,
      name: 'Компрессор газовый КГ-2/150',
      category: 'Компрессоры',
      price: '125 000 ₽',
      specs: ['Производительность 2 м³/мин', 'Давление до 150 атм', 'Электропривод 15 кВт'],
      image: '/img/6cc715f7-af26-41df-a439-30da077700d3.jpg',
      rating: 4.8,
      certified: true,
      reviews: [
        { id: 1, author: 'Роман Б.', rating: 5, text: 'Мощный компрессор, отличная производительность', date: '10.10.2024' }
      ]
    },
    {
      id: 12,
      name: 'Манометр показывающий МТП-100',
      category: 'Измерительные приборы',
      price: '3 400 ₽',
      specs: ['Диапазон 0-25 кгс/см²', 'Класс точности 1.5', 'Корпус диаметр 100 мм'],
      image: '/img/6cc715f7-af26-41df-a439-30da077700d3.jpg',
      rating: 4.3,
      certified: true,
      reviews: [
        { id: 1, author: 'Василий Н.', rating: 4, text: 'Точные показания, хорошо видно шкалу', date: '12.10.2024' }
      ]
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name={i < rating ? 'Star' : 'Star'}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gas-gradient text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="gas-equipment-title text-white mb-6">
            GASEQUIPMENT
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Профессиональное газовое оборудование для промышленности и коммунальных служб. 
            Сертифицированные решения с проверкой документов.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setActiveSection('catalog')}
            >
              <Icon name="ShoppingCart" className="mr-2" size={20} />
              Каталог оборудования
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => setActiveSection('about')}
            >
              <Icon name="Info" className="mr-2" size={20} />
              О компании
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Shield" className="mx-auto mb-4 text-green-600" size={48} />
                <CardTitle>Сертифицированное оборудование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Все товары имеют необходимые сертификаты и документы</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Truck" className="mx-auto mb-4 text-blue-600" size={48} />
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Доставка по всей России в кратчайшие сроки</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Wrench" className="mx-auto mb-4 text-orange-600" size={48} />
                <CardTitle>Техническая поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Консультации и поддержка специалистов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">О компании GasEquipment</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/img/c8129b81-ba70-4a72-a28d-cc0b6c1f5859.jpg" 
              alt="Производственные мощности" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">15 лет на рынке газового оборудования</h3>
            <p className="text-gray-600 mb-4">
              GasEquipment — ведущий поставщик промышленного газового оборудования в России. 
              Мы специализируемся на поставке сертифицированного оборудования для газовой промышленности, 
              коммунальных служб и промышленных предприятий.
            </p>
            <p className="text-gray-600 mb-6">
              Наша компания имеет все необходимые лицензии и сертификаты для работы с газовым оборудованием. 
              Мы сотрудничаем только с проверенными производителями и гарантируем качество всей продукции.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">1000+</div>
                <div className="text-sm text-gray-600">Единиц оборудования</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Award" className="mr-2 text-yellow-600" />
                Лицензии
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Лицензия Ростехнадзора</li>
                <li>• ISO 9001:2015</li>
                <li>• Сертификат соответствия ГОСТ</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Users" className="mr-2 text-blue-600" />
                Команда
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Инженеры-газовики</li>
                <li>• Технические консультанты</li>
                <li>• Специалисты по монтажу</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="MapPin" className="mr-2 text-red-600" />
                География
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Вся территория России</li>
                <li>• Страны СНГ</li>
                <li>• Собственные склады</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const CatalogPage = () => (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Каталог газового оборудования</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentData.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="outline">{item.category}</Badge>
                  {item.certified && (
                    <Badge variant="default" className="bg-green-600">
                      <Icon name="Shield" size={12} className="mr-1" />
                      Сертифицирован
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {renderStars(Math.floor(item.rating))}
                    </div>
                    <span className="text-sm">({item.rating})</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{item.price}</div>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2 mb-4">
                  {item.specs.map((spec, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      • {spec}
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Отзывы ({item.reviews.length}):</h4>
                  {item.reviews.slice(0, 2).map((review) => (
                    <div key={review.id} className="text-xs bg-gray-50 p-2 rounded">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{review.author}</span>
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.text}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button className="flex-1" size="sm">
                    <Icon name="ShoppingCart" size={14} className="mr-1" />
                    Купить
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="FileText" size={14} className="mr-1" />
                    Документы
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div 
              className="font-bold text-xl cursor-pointer"
              onClick={() => setActiveSection('home')}
            >
              GASEQUIPMENT
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setActiveSection('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('about')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'about' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                О компании
              </button>
              <button 
                onClick={() => setActiveSection('catalog')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'catalog' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Каталог
              </button>
            </div>

            <Button size="sm" className="gas-gradient text-white">
              <Icon name="Phone" size={14} className="mr-1" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      {activeSection === 'home' && <HomePage />}
      {activeSection === 'about' && <AboutPage />}
      {activeSection === 'catalog' && <CatalogPage />}
    </div>
  );
};

export default Index;