import Button from '../Button/Button';
import { CardType } from '../../types/CardType/CardType';

const CardList: React.FC<CardType> = ({ items, customStyles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 p-4 mt-10 ">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white"
        >

          {item.image && (
            <img
              src={item.image}
              alt={item.title || 'Card Image'}
              className="w-full h-48 object-cover rounded-lg"
            />
          )}

          <div className="pt-6 flex flex-col space-y-3">

            {item.title && (
              <h1 className={`text-lg text-gray-800 ${customStyles?.title}`}>{item.title}</h1>
            )}


            {item.description && (
              <p className="text-gray-600">{item.description}</p>
            )}

            {item.buttons && item.buttons.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2 pt-6">
                {item.buttons.map((button, btnIndex) => (
                  <Button
                    key={btnIndex}
                    label={button.label}
                    onBtnClick={button.onClick}
                    className=""
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList
