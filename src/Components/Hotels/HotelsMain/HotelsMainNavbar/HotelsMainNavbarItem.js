export default function HotelsMainNavbarItem({ navItem }) {
  return (
    <div
      style={{
        padding: '8px 16px',
        borderRadius: '24px',
        boxShadow:
          'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // border: '1px solid blue',
      }}
    >
      <img
        alt="nav item"
        src={navItem.image}
        style={{ width: '30px', height: '30px', borderRadius: '100%' }}
      />
      <div
        style={{
          fontSize: '16px',
          fontWeight: '700',
          color: 'rgb(107, 114, 128)',
        }}
      >
        {navItem.name}
      </div>
    </div>
  );
}
